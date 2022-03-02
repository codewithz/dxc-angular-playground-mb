import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable-pipe',
  templateUrl: './observable-pipe.component.html',
  styleUrls: ['./observable-pipe.component.css']
})
export class ObservablePipeComponent implements OnInit {

  data: any = []
  constructor(private service: ObservableService) { }

  ngOnInit(): void {

    this.service.getObservable()
      .subscribe((data) => {
        this.data = data
        console.log('Response from Observable with Pipe', this.data)
      })

    this.service.getOtherObservale()
      .subscribe(
        (data) => {
          console.log('Value Recieved ', data)
        }
        // ,
        // (error) => {
        //   console.log('Component Error Area ', error)
        // }
      )

  }

}
