import { from, of } from "rxjs";
import { delay } from "rxjs/operators";

export const dummy = (num: number) => {
  return of(`Number: ${num}`).pipe(
    delay(1000)
  );
}

export const dummyApi = (character) => {
  return of(`API response for character: ${character}`).pipe(
    delay(1000)
  );
}



export const source$ = from(["Audi", "Bentley", "Toyota", "Huyndai"])

export const sourceNumber$ = from([1, 2, 3])