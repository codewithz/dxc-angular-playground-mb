import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title = "Property Binding";
  imageURL = 'http://codewithz.com/images/what-is-mongodb/01.png';
  colSpan = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
