export function getCafe(): string {
  // return process.env.TESTVAR || 'Cafe1'
  return import.meta.env.TESTVAR || process.env.TESTVAR || "DEFAULT_CAFE";
}
