import { Subject } from "rxjs";

export class SubjectManager {
  private subject = new Subject();

  getSubject() {
    // lo volvemos unicast
    // para conservar el encapsulamiento
    return this.subject.asObservable();
  }

  setSubject(value: any) {
    // enviamos la informacion a kien kiera oirla
    this.subject.next(value);
  }
}
