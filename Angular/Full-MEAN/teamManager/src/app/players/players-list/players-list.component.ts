import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';
import { Player } from '../../player';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [];

  constructor(private plrService: PlayersService) { }

  ngOnInit() {
    // this.plrService.getAll().subscribe(plr => this.players = plr);
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.plrService.getAll().subscribe(plr => this.players = plr);
  }

  deletePlayer(id) {
    console.log(id);
    const doIt = confirm('You clicked delete player - are you sure?');
    if (doIt) {
      this.plrService.delete(id).subscribe(player => {
        // this.players = this.players.filter(this.players._id !== player._id);
        console.log('deleted player: ', player);
        // this.players = this.players.filter(element => element._id !== player._id);
        this.getAllPlayers();
      });
    }
  }
}
