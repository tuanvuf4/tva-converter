import { getLocalTimeZone } from '../../core/functions';
var TVADate = /** @class */ (function () {
    function TVADate() {
    }
    TVADate.getCurrentDate = function () {
        return new Date().getTime();
    };
    TVADate.getCurrentTimeZone = function () {
        return getLocalTimeZone();
    };
    TVADate.getSeconds = function () {
        return new Date().getSeconds();
    };
    return TVADate;
}());
export { TVADate };
//# sourceMappingURL=date.js.map