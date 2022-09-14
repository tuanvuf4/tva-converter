export const getLocalTimeZone = () => {
  const offset = new Date().getTimezoneOffset();
  const sign = offset > 0 ? '-' : '+'
  const timezone = Math.abs(offset)/60
  return `UTC${sign}${timezone}`
}