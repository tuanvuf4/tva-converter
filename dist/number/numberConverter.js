"use strict";
var NumberConverter;
(function (NumberConverter) {
    NumberConverter.getCurrentDate = function () {
        return new Date().getTime();
    };
})(NumberConverter || (NumberConverter = {}));