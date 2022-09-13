import { People, startupDecorator } from './decorators/startup';

export namespace TVAConverter {
  export const create = () => {
    console.log('on Create ');
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

export * from './decorators/startup'