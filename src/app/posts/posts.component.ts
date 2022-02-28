import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { Post } from './post.model';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];


  constructor(private service: PostService) { }

  ngOnInit(): void {

    this.service.getPosts()
      .subscribe(
        (response) => {
          this.posts = response;
        }
      )
  }

  createPost(input: HTMLInputElement) {
    // console.log(input.value)
    let post = { title: input.value, id: 0 }
    this.service.createPost(post)
      .subscribe(
        (response) => {
          let id = response.id ? response.id : 0
          post.id = id;
          console.log(post)
          this.posts.splice(0, 0, post)
        }
      )
  }

  updatePost(post: Post) {
    post.title = 'Updated:' + post.title;
    this.service.updatePost(post)
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }

  deletePost(post: Post) {
    let id = post.id ? post.id : 0;
    this.service.deletePost(id)
      .subscribe(
        (response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
      )
  }


}
