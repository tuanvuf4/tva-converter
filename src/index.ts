export const powerBy = (num: number, pow: number) => {
  console.log('onInputchange');
  if (typeof(num) !== 'number' || typeof(pow) !== 'number') {
    return Math.pow(num, pow)
  }
  throw new Error("Invalid type");
}