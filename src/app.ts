export function getCafe() {
  // return process.env.TESTVAR || 'Cafe1'
  return import.meta.env.TESTVAR || 'Cafe1'
}