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
  private url: string = 'https://abcdefjsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  createPost(post: Post) {
    return this.http
      .post<{ title?: string, id?: number }>(this.url, JSON.stringify(post))
      .pipe(
        catchError(this.handleError)

      )

  }

  updatePost(post: Post) {
    return this.http.put(this.url + '/' + post.id, post)
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/zartab/ABC' + 21547)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: Response) {
    console.log('Error management is happeneing here.....')
    if (error.status === 404) {
      return throwError(new NotFoundError())
    }

    if (error.status === 400) {
      return throwError(new BadInput());
    }

    else {
      return throwError(new AppError(error))
    }

  }


}
