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
export class Person {

  // @anotherDecorator
  sayName() {
    console.log('sayName ')
  }
}

function anotherDecorator(target: any) {
  console.log('anotherDecorator ')
}

function sealed(target: Function) {
  // Object.seal(target);
  // Object.seal(target.prototype);
}

function simpleDecorator(target: any) {
  console.log('Hello from Decorator');
 
//   Object.defineProperty(target.prototype, 'value1', {
//     value: 100,
//     writable: false
//   });
//  
//   Object.defineProperty(target.prototype, 'value2', {
//     value: 200,
//     writable: false
//   });
}