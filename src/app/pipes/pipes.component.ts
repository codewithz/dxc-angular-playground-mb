import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  course = {
    title: 'Angular In depth Training',
    rating: 4.985,
    students: 12345,
    price: 200.45,
    releaseDate: new Date(2022, 1, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
