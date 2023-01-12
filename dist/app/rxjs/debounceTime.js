import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
export var keyupListener = function (el) {
    var keyup$ = fromEvent(el, 'keyup');
    return keyup$.pipe(map(function (i) { return i.currentTarget.value; }), debounceTime(1000));
};
//# sourceMappingURL=debounceTime.js.map