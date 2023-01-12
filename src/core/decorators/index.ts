export const startupDecorator = () => {
  console.log('startupDecorator');
};

export class People {
  private _height: number;
  private _weight: number;

  get height() {
    return this._height;
  }

  set height(h: number) {
    this._height = h;
  }

  get weight() {
    return this._weight;
  }

  set weight(h: number) {
    this._weight = h;
  }

  constructor(h: number, w: number) {
    this._height = h;
    this._weight = w;
  }

  work() {
    console.log('people work!');
  }

  sayHeight() {
    console.log('People say height: ' + this.height);
  }

  sayWeight() {
    console.log('People say weight: ' + this.weight);
  }
}

// @classDecorator
// class Person {
//   @propertyDecorator
//   public name: string;
// 
//   @accessorDecorator
//   get fullName() {
//     // ...
//   }
// 
//   @methodDecorator
//   printName(@parameterDecorator prefix: string) {
//     // ...
//   }
// }

@simpleDecorator
@sealed
export class Person {}

function sealed(target: Function) {
  // Object.seal(target);
  // Object.seal(target.prototype);
}

const p1 = new Person()
console.log('p1 ', p1)
// p1

function simpleDecorator(target: any) {
  console.log('Hello from Decorator');
 
  Object.defineProperty(target.prototype, 'value1', {
    value: 100,
    writable: false
  });
 
  Object.defineProperty(target.prototype, 'value2', {
    value: 200,
    writable: false
  });
}