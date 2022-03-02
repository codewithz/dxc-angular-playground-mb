import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  observable = new Observable<number>(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.next(4)
    subscriber.next(5)
    subscriber.next(6)
    subscriber.next(7)
    subscriber.complete()
  }).pipe(
    filter((data) => data > 2),
    map((data) => data * 3)
  )

  myData = from([1, 2, 3, 'A', 'B', 10]);

  otherObservale = this.myData
    .pipe(
      map((value) => {
        let result = (value as number) * 2;
        if (Number.isNaN(result)) {
          console.log("Error in Stream");
          throw new Error('NaN Error');
        }
        return result;
      }),
      catchError(error => {
        console.log("error Management happeneing here...")
        return throwError(error)
      })
    )

  constructor() { }


  getObservable() {
    return this.observable;
  }
  getOtherObservale() {
    return this.otherObservale;
  }
}
