export var powerBy = function (num, pow) {
    if (typeof (num) === 'number' && typeof (pow) === 'number') {
        return Math.pow(num, pow);
    }
    throw new Error("Invalid input data!");
};
var TVAConverter;
(function (TVAConverter) {
    function create() {
        console.log('on Create ');
    }
    TVAConverter.create = create;
})(TVAConverter || (TVAConverter = {}));
//# sourceMappingURL=index.js.map