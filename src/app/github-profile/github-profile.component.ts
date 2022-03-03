import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id: string = 'No ID Yet'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Github Profile On Init")



    this.route.paramMap
      .subscribe(
        (params) => {
          let gitUser = params.get('user');
          this.id = gitUser ? gitUser : 'No ID Yet'
        }
      )
  }

}
