import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.dirname(fileURLToPath(import.meta.url));
const modules = path.join(root, 'node_modules');
if (!fs.existsSync(path.join(modules, 'jest/bin/jest.js'))) {
  throw new Error('Сначала выполните npm install в корне проекта');
}
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'tabriz-tests-'));
let passed = 0;
try {
  const groups = fs.readdirSync(root).filter((name) => /^\d{2}_/.test(name)).sort();
  for (const group of groups) {
    const number = Number(group.slice(0, 2));
    const projects = number === 9 ? [1, 2, 3, 4, 5, 6].map(String) : [''];
    for (const project of projects) {
      const label = group + (project ? '/' + project : '');
      const output = path.join(temporary, label.replaceAll('/', '_') + '.json');
      const vitest = number === 1 || number === 10;
      const args = vitest
        ? [path.join(modules, 'vitest/vitest.mjs'), 'run', '--maxWorkers=2', '--reporter=json', '--outputFile=' + output]
        : [path.join(modules, 'jest/bin/jest.js'), '--runInBand', '--json', '--silent', '--outputFile=' + output];
      if (number === 7) args.push('--testMatch=**/__tests__/*.js');
      const result = spawnSync(process.execPath, args, { cwd: path.join(root, group, project), encoding: 'utf8' });
      const data = fs.existsSync(output) ? JSON.parse(fs.readFileSync(output, 'utf8')) : null;
      if (result.status !== 0 || !data?.success || data.numFailedTests > 0) {
        console.error(result.stdout, result.stderr);
        throw new Error('Не пройдена проверка: ' + label);
      }
      passed += data.numPassedTests;
      console.log(label + ': ' + data.numPassedTests + ' тестов пройдено');
    }
  }
  const typecheck = spawnSync(process.execPath, [path.join(modules, 'typescript/bin/tsc'), '-p', '10_typescript', '--noEmit'], { cwd: root, encoding: 'utf8' });
  if (typecheck.status !== 0) {
    console.error(typecheck.stdout, typecheck.stderr);
    throw new Error('Ошибка проверки типов TypeScript');
  }
  console.log('Всего: ' + passed + ' тестов пройдено. TypeScript: без ошибок.');
} finally {
  const relative = path.relative(os.tmpdir(), temporary);
  if (relative.startsWith('tabriz-tests-') && !relative.includes(path.sep)) {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}
