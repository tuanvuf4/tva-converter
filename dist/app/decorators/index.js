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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        sealed
    ], Person);
    return Person;
}());
function sealed(target) {
    // Object.seal(target);
    // Object.seal(target.prototype);
}
var p1 = new Person();
console.log('p1 ', p1);
// p1
//# sourceMappingURL=index.js.map