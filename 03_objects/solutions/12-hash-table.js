import crc32 from "crc-32";
export const make = () => [];
export const set = (map, key, value) => {
  const hash = crc32.str(key);
  if (map[hash] !== undefined && map[hash][0] !== key) return false;
  map[hash] = [key, value];
  return true;
};
export const get = (map, key, fallback = null) => {
  const pair = map[crc32.str(key)];
  return pair !== undefined && pair[0] === key ? pair[1] : fallback;
};
