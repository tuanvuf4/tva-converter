export * from './app/number';
export * from './app/date';

import {
  concatMapOperater,
  foo,
  mapOperater,
  mergeMapOperater,
  switchMapOperater,
} from './app/rxjs/operaters';

import { Person } from './app/decorators';
import { keyupListener } from './app/rxjs/debounceTime';
import {
  SubjectQueues,
  BehaviorSubjectQueues,
  AsyncSubjectQueues,
  ReplaySubjectQueues,
} from './app/rxjs/subjects';
import { sourceNumber$ } from './app/rxjs';

keyupListener(document.getElementById('search')).subscribe((resposne) => {
  console.log('resposne ', resposne);
});

let i = 0;

keyupListener(document.getElementById('SubjectQueues')).subscribe(
  (resposne) => {
    console.log('SubjectQueues ', resposne);
  },
);

// SubjectQueues
SubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('SubjectQueues a ', response);
});
SubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('SubjectQueues b ', response);
});
document.getElementById('SubjectQueues').addEventListener('click', () => {
  SubjectQueues.next(i++);
});

// BehaviorSubjectQueues
BehaviorSubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('BehaviorSubjectQueues a ', response);
  console.log('BehaviorSubjectQueues b ', response);
});
BehaviorSubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('BehaviorSubjectQueues a ', response);
  console.log('BehaviorSubjectQueues b ', response);
});
document
  .getElementById('BehaviorSubjectQueues')
  .addEventListener('click', () => {
    BehaviorSubjectQueues.next(i++);
  });

// AsyncSubjectQueues
AsyncSubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('AsyncSubjectQueues a ', response);
  console.log('AsyncSubjectQueues b ', response);
});
AsyncSubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('AsyncSubjectQueues a ', response);
  console.log('AsyncSubjectQueues b ', response);
});
document.getElementById('AsyncSubjectQueues').addEventListener('click', () => {
  AsyncSubjectQueues.next(i++);
  AsyncSubjectQueues.complete();
});

// ReplaySubjectQueues
ReplaySubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('ReplaySubjectQueues a ', response);
});
ReplaySubjectQueues.subscribe((response) => {
  console.log('=================================');
  console.log('ReplaySubjectQueues b ', response);
});
document.getElementById('ReplaySubjectQueues').addEventListener('click', () => {
  ReplaySubjectQueues.next(i++);
  ReplaySubjectQueues.next(i + 2);
  ReplaySubjectQueues.next(i + 3);
  ReplaySubjectQueues.next(i + 4);
  ReplaySubjectQueues.next(i + 4);
});

const p1 = new Person();
console.log('p1 ', p1);
p1.sayName();

// console.log('-------------- map --------------');
// mapOperater.subscribe((data) => console.log(data));

// console.log('-------------- switchMap --------------');
// switchMapOperater.subscribe((data) => console.log(data));
// 
// console.log('-------------- mergeMap --------------');
// mergeMapOperater.subscribe((data) => console.log(data));
// 
// console.log('-------------- concatMap --------------');
// concatMapOperater.subscribe((data) => console.log(data));

console.log('-------------- concatMap --------------');
foo.subscribe((data) => console.log(data));
