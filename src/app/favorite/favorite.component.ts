import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],


})
export class FavoriteComponent implements OnInit {

  @Input('isSelected') isFavorite: boolean = true;


  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    let someObject = {
      color: 'red'
    }
    this.change.emit(someObject);

  }

}
