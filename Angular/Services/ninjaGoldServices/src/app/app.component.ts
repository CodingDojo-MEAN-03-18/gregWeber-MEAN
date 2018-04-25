import { Component, OnInit } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  goldCount = 0;

  constructor(private goldService: GoldService) {}

  buildings = {
    farm: {
      name: 'Farm',
      action: 'earns 2-5 Gold',
    },
    cave: {
      name: 'Cave',
      action: 'earns 5-10 Gold',
    },
    casino: {
      name: 'Casino',
      action: 'earn or lose upto 100 Gold',
    },
    house: {
      name: 'House',
      action: 'earns 7-15 Gold',
    },
  };

  ngOnInit() {
    // this.diff = this._numbersService.difference;
    this.goldService.gold$.subscribe(count => {
      this.goldCount = count;
    });
  }
}
