import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayersService } from '../../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-new',
  templateUrl: './players-new.component.html',
  styleUrls: ['./players-new.component.css']
})
export class PlayersNewComponent implements OnInit {
  player = new Player();

  constructor(private plrService: PlayersService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.plrService.addNew(this.player).subscribe(plr => {
      console.log('in subsrciption just created: ', plr);
      this.player = new Player();
      this.router.navigateByUrl('/');
    });
  }
}
