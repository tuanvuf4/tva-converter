export var powerBy = function (num, pow) {
    if (typeof (num) === 'number' && typeof (pow) === 'number') {
        return Math.pow(num, pow);
    }
    throw new Error("Invalid input data!");
};
//# sourceMappingURL=index.js.map