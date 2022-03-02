import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-follower-enhanced/github.service';

@Component({
  selector: 'app-github-follower-enhanced',
  templateUrl: './github-follower-enhanced.component.html',
  styleUrls: ['./github-follower-enhanced.component.css']
})
export class GithubFollowerEnhancedComponent implements OnInit {

  followers: any = []

  constructor(private service: GithubService) {

  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        (response) => {
          this.followers = response;
        }
      )
  }

}
