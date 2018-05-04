import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';
import { Player } from '../../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [];

  constructor(private plrService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.plrService.getAll().subscribe(plr => this.players = plr);
  }

  deletePlayer(id) {
    console.log(id);
    this.plrService.delete(id).subscribe(player => {
      // this.players = this.players.filter(this.players._id !== player._id);
      // console.log(player._id);
      this.players = this.players.filter(element => element._id !== player._id)
    });
  }
}
