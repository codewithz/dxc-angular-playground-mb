import { Component, OnInit } from '@angular/core';

interface Course {
  id: number,
  name: string
}

@Component({
  selector: 'app-directive-for-change',
  templateUrl: './directive-for-change.component.html',
  styleUrls: ['./directive-for-change.component.css']
})
export class DirectiveForChangeComponent implements OnInit {

  courses: any;

  constructor() { }

  ngOnInit(): void {
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
      { id: 4, name: 'Course 4' },
    ]
  }

  onAdd() {
    this.courses.push({ id: 5, name: 'Course 5' });
  }

  onUpdate(course: Course) {
    let index = this.courses.indexOf(course);
    let updatedCourse = this.courses[index];
    updatedCourse.name = 'Test';
    this.courses[index] = updatedCourse;
  }

  onRemove(course: Course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index: number, course: Course) {
    course ? course.id : undefined;
  }

}
