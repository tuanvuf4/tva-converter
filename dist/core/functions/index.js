export var getLocalTimeZone = function () {
    var offset = new Date().getTimezoneOffset();
    var sign = offset > 0 ? '-' : '+';
    var timezone = Math.abs(offset) / 60;
    return "UTC".concat(sign).concat(timezone);
};
//# sourceMappingURL=index.js.map