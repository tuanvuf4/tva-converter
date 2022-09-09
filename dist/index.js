export var powerBy = function (num, pow) {
    console.log('onInputchange');
    if (typeof (num) !== 'number' || typeof (pow) !== 'number') {
        return Math.pow(num, pow);
    }
    throw new Error("Invalid type");
};
//# sourceMappingURL=index.js.map