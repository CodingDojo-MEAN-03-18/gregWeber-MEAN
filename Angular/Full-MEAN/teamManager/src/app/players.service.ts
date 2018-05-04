import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player } from './player';

@Injectable()
export class PlayersService {
  private base = '/api/players/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  addNew(player): Observable<Player> {
    // console.log('in service adding : ', player);
    return this.http.post<Player>(this.base, player);
  }

  delete(id): Observable<string> {
    return this.http.delete<string>(this.base + id);
  }
}

