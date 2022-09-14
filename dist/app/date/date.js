import { getLocalTimeZone } from '../../core/functions';
var TVADate = /** @class */ (function () {
    function TVADate() {
    }
    TVADate.prototype.getCurrentDate = function () {
        return new Date().getTime();
    };
    TVADate.prototype.getCurrentTimeZone = function () {
        return getLocalTimeZone();
    };
    TVADate.prototype.getSeconds = function () {
        return new Date().getSeconds();
    };
    return TVADate;
}());
export { TVADate };
//# sourceMappingURL=date.js.map