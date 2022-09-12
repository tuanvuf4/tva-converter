export const powerBy = (num: number, pow: number) => {
  if (typeof(num) === 'number' && typeof(pow) === 'number') {
    return Math.pow(num, pow)
  }
  throw new Error("Invalid input data!");
  
}

namespace TVAConverter {
  export function create() {
    console.log('on Create ')
  }
}

TVAConverter.create()