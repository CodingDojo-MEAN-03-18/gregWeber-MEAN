import { Component, OnInit, Input } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() theBuildings;

  constructor(private goldService: GoldService) { }

  getGold(building: string) {
    this.goldService.generateGold(building);
  }

  ngOnInit() {
  }

}
