import { BehaviorSubject, Subject, ReplaySubject, AsyncSubject } from 'rxjs';

export const SubjectQueues = new Subject();

export const BehaviorSubjectQueues = new BehaviorSubject<number>(0);

export const ReplaySubjectQueues = new ReplaySubject(1);

export const AsyncSubjectQueues = new AsyncSubject();
