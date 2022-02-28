import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: Post) {
    return this.http
      .post<{ title?: string, id?: number }>(this.url, JSON.stringify(post))

  }

  updatePost(post: Post) {
    return this.http.put(this.url + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id)
  }


}
