import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title: string = "List of Courses";
  name: string = "Angular";
  duration: number = 8;

  courses: string[];

  //Logic for calling the HTTP Service

  constructor(service: CourseService) {
    // let service = new CourseService();
    this.courses = service.getCourses();

  }

  ngOnInit(): void {
  }

}
