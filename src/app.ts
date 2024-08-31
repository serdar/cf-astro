import { TESTVAR } from "astro:env/server";
// export function getCafe(): string {
//   // return process.env.TESTVAR || 'Cafe1'
//   return import.meta.env.TESTVAR || process.env.TESTVAR || "DEFAULT_CAFE";
// }

export const getCafe = () => {
  // const client = myLib(MY_SECRET);
  return TESTVAR;
};
