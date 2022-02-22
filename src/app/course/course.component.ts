import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of Courses";
  name = "Angular";
  duration = 8;

  courses = [
    'HTML-CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React'
  ]

  //Logic for calling the

  constructor() { }

  ngOnInit(): void {
  }

}
