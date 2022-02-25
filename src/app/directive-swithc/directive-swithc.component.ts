import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-swithc',
  templateUrl: './directive-swithc.component.html',
  styleUrls: ['./directive-swithc.component.css']
})
export class DirectiveSwithcComponent implements OnInit {

  viewMode: string = 'list';

  constructor() { }

  ngOnInit(): void {
  }

  makeMapActive() {
    this.viewMode = 'map';
  }

  makeListActive() {
    this.viewMode = 'list'
  }

}
