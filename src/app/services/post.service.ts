import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../posts/post.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input-error';

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
      .pipe(
        catchError((error: Response) => {
          if (error.status === 400) {
            return throwError(new BadInput());
          }
          else {
            return throwError(new AppError(error))
          }
        })
      )

  }

  updatePost(post: Post) {
    return this.http.put(this.url + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/zartab/ABC' + 21547)
      .pipe(
        catchError((error: Response) => {
          console.log('Error Management Happening Here..', error);
          if (error.status === 404) {
            return throwError(new NotFoundError())
          }
          else {
            return throwError(new AppError(error))
          }
        }
        )
      )
  }


}
