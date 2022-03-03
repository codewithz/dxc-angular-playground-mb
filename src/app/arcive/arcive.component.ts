import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-arcive',
  templateUrl: './arcive.component.html',
  styleUrls: ['./arcive.component.css']
})
export class ArciveComponent implements OnInit {

  year: string = '';
  month: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
        let year = params.get('year');
        this.year = year ? year : 'Default'
        let month = params.get('month');
        this.month = month ? month : 'Default'
      }
    )

  }

  goBack() {
    this.router.navigate(['/archive-home'])
  }

}
