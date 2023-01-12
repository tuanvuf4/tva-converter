import { of } from 'rxjs';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { dummy, dummyApi, source$, sourceNumber$ } from '.';

export const mapOperater = source$.pipe(
  map((arr) => {
    console.log('arr ', arr)
    return dummyApi(arr);
  }),
);

export const switchMapOperater = source$.pipe(
  switchMap((arr) => {
    return dummyApi(arr);
  }),
);

export const mergeMapOperater = source$.pipe(
  mergeMap((arr) => {
    return dummyApi(arr);
  }),
);

export const concatMapOperater = source$.pipe(
  concatMap((arr) => {
    return dummyApi(arr);
  }),
);

export const foo = sourceNumber$.pipe(
  switchMap((num: number) => {
    return dummy(num)
  }),
)
