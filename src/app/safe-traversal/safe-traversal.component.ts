import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent implements OnInit {

  task = {
    title: 'Review Applications',
    assignee: {

    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
