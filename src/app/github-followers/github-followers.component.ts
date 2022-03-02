import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any = [];

  constructor(private service: GithubService) { }

  ngOnInit(): void {

    this.service.getFollowers()
      .subscribe(
        (response) => {
          this.followers = response;
          console.log(this.followers)
        },
        (error) => {
          alert('Some unexpected error happened')
        }
      )
  }

}
