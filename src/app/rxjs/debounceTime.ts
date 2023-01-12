import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export const keyupListener = (el: HTMLElement) => {
  const keyup$ = fromEvent(el, 'keyup');
  return keyup$.pipe(
    map((i: any) => i.currentTarget.value),
    debounceTime(1000),
  );
};
