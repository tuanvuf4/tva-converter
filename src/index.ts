export const powerBy = (num: number, pow: number) => {
  if (typeof(num) === 'number' && typeof(pow) === 'number') {
    return Math.pow(num, pow)
  }
  throw new Error("Invalid input data!");
}

export namespace TVAConverter {
  export function create() {
    console.log('on Create ')
  }
}

TVAConverter.create()

export class Animal {
  feet: number

  constructor() {
    
  }

  run() {
    console.log('animal run ')
  }

  jump() {
    console.log('animal jump');
  }
}

export { startupDecorator } from './decorators/startup'