import { People, startupDecorator } from './decorators/startup';

export namespace TVAConverter {
  export const create = () => {
    console.log('on Create ');
    startupDecorator();
  };

  export const powerBy = (num: number, pow: number) => {
    if (typeof num === 'number' && typeof pow === 'number') {
      return Math.pow(num, pow);
    }
    throw new Error('Invalid input data!');
  };

  export class Animal {
    feet: number;

    constructor() {}

    run() {
      console.log('animal run ');
    }

    jump() {
      console.log('animal jump');
    }
  }
}

export const foo = 'foo';
export enum EJob {
  TEACHER,
  DEVELOPER,
  LAWYER,
}
export const p1 = new People(12, 40)
console.log('p1.height ', p1.height)
console.log('p1.weight ', p1.weight)

export * from './decorators/startup'