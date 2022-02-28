import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

    http.get(this.url)
      .subscribe(
        (response) => {
          this.posts = response;
        }
      )

  }

  createPost(input: HTMLInputElement) {
    // console.log(input.value)
    let post = { title: input.value, id: 0 }
    this.http
    .post<{ title?: string, id?: number }>(this.url, JSON.stringify(post))
      .subscribe(
        (response) => {
          let id = response.id ? response.id : 0
          post.id = id;
          console.log(post)
          this.posts.splice(0, 0, post)
        }
      )
  }

  ngOnInit(): void {
  }

}
