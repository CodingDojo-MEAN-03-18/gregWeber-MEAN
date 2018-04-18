import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {

  @Input() powerInput: number;

  ngOnChanges(changes: SimpleChanges) {
    if (this.powerInput) {
      this.powerInput *= 10;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
