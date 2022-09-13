export var powerBy = function (num, pow) {
    if (typeof (num) === 'number' && typeof (pow) === 'number') {
        return Math.pow(num, pow);
    }
    throw new Error("Invalid input data!");
};
export var TVAConverter;
(function (TVAConverter) {
    function create() {
        console.log('on Create ');
    }
    TVAConverter.create = create;
})(TVAConverter || (TVAConverter = {}));
TVAConverter.create();
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
export { Animal };
