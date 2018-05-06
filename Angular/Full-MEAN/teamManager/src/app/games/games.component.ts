import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gameNum: string;
  players: Player[] = [];
  constructor(private route: ActivatedRoute, private plrService: PlayersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.gameNum = param.get('num');
      this.getAllPlayers();
    });
  }

  getAllPlayers() {
    this.plrService.getAll().subscribe(plrs => this.players = plrs);
  }

  updateStatus(player: Player, game: string, status: string) {
    this.plrService.updateStatus(player, game, status).subscribe(plr => console.log('updated player from edit http response: ', plr));
  }

}
