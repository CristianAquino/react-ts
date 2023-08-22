import { BehaviorSubject } from "rxjs";

export class SubjectManager {
  private observable: BehaviorSubject<string> = new BehaviorSubject("");

  getObservable() {
    return this.observable.asObservable();
  }

  setObservable(value: any) {
    this.observable.next(value);
  }
}
