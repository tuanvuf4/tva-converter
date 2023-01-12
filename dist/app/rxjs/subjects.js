import { BehaviorSubject, Subject, ReplaySubject, AsyncSubject } from 'rxjs';
/*
 *
 */
export var SubjectQueues = new Subject();
export var BehaviorSubjectQueues = new BehaviorSubject(0);
export var ReplaySubjectQueues = new ReplaySubject(1);
export var AsyncSubjectQueues = new AsyncSubject();
//# sourceMappingURL=subjects.js.map