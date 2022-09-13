import { People, startupDecorator } from './decorators/startup';
export var TVAConverter;
(function (TVAConverter) {
    TVAConverter.create = function () {
        console.log('on Create ');
        startupDecorator();
    };
    TVAConverter.powerBy = function (num, pow) {
        if (typeof num === 'number' && typeof pow === 'number') {
            return Math.pow(num, pow);
        }
        throw new Error('Invalid input data!');
    };
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.run = function () {
            console.log('animal run ');
        };
        Animal.prototype.jump = function () {
            console.log('animal jump');
        };
        return Animal;
    }());
    TVAConverter.Animal = Animal;
})(TVAConverter || (TVAConverter = {}));
export var foo = 'foo';
export var EJob;
(function (EJob) {
    EJob[EJob["TEACHER"] = 0] = "TEACHER";
    EJob[EJob["DEVELOPER"] = 1] = "DEVELOPER";
    EJob[EJob["LAWYER"] = 2] = "LAWYER";
})(EJob || (EJob = {}));
export var p1 = new People(12, 40);
console.log('p1.height ', p1.height);
console.log('p1.weight ', p1.weight);
export * from './decorators/startup';
//# sourceMappingURL=index.js.map