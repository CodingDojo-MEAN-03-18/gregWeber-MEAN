import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player } from './player';

@Injectable()
export class PlayersService {
  private base = '/api/players/';
  player: Player;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  addNew(player): Observable<Player> {
    // console.log('in service adding : ', player);
    return this.http.post<Player>(this.base, player);
  }

  delete(id): Observable<Player> {
    return this.http.delete<Player>(this.base + id);
  }

  updateStatus(player: Player, game: string, status: string): Observable<Player> {
    console.log('updating status in service', player, game, status);
    this.player = player;
    if (game === '1') {
      this.player.status.game1 = status;
    } else if (game === '2') {
      this.player.status.game2 = status;
    } else {
      this.player.status.game3 = status;
    }
    console.log(this.player._id, this.player.status);
    return this.http.put<Player>(this.base + this.player._id, this.player);
  }
}

