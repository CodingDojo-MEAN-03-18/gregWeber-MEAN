import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  log: string[] = [];
  constructor(private goldService: GoldService) { }

  ngOnInit() {
    this.goldService.log$.subscribe(updatedLog => {
      this.log = updatedLog;
    });
  }

}
