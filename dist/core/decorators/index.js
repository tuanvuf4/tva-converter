export var startupDecorator = function () {
    console.log('startupDecorator');
};
var People = /** @class */ (function () {
    function People(h, w) {
        this._height = h;
        this._weight = w;
    }
    Object.defineProperty(People.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (h) {
            this._height = h;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (h) {
            this._weight = h;
        },
        enumerable: false,
        configurable: true
    });
    People.prototype.work = function () {
        console.log('people work!');
    };
    People.prototype.sayHeight = function () {
        console.log('People say height: ' + this.height);
    };
    People.prototype.sayWeight = function () {
        console.log('People say weight: ' + this.weight);
    };
    return People;
}());
export { People };
//# sourceMappingURL=index.js.map