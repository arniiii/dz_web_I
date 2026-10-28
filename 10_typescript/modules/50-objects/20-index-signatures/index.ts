export interface EmployeeSalary {
  [name: string]: number;
}
interface SalaryStatistics {
  min: number;
  max: number;
  avg: number;
}
export const buildSalaryStatistics = (
  employees: EmployeeSalary
): SalaryStatistics => {
  const values = Object.values(employees);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
    avg: values.reduce((a, b) => a + b, 0) / values.length,
  };
};
