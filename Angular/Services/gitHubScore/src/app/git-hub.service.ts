import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './models/user';

import { tap } from 'rxjs/operators';

@Injectable()
export class GitHubService {
  private base = 'https://api.github.com/users';
  user: Observable<User>;

  error = false;

  score$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

  getUser(userName: string) {
    console.log('in get user service... ', userName);
    return this.http.get<User>(`${this.base}/${userName}`)
      .pipe(
        tap(user => this.score$.next(user.followers + user.public_repos)));
  }

  // getScore(): void {
  //   this.score$.next(this.score);
  // }
}
