export default (size: number): null[][] =>
  Array.from({ length: size }, () =>
    Array.from<null>({ length: size }).fill(null)
  );
