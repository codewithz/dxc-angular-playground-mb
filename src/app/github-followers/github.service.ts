import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url: string = 'https://api.github.com/users/codewithz/followers';

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get(this.url)
  }
}
