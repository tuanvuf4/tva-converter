export const startupDecorator = () => {
  console.log('startupDecorator');
}

export class People {
  height: number

  constructor() {
    this.height = 180
  }

  work() {
    console.log('people work!');
  }
}