import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {

  @Input() powerInput: number;

  ngOnChanges(changes: SimpleChanges) {
    if (this.powerInput) {
      this.powerInput *= 90;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
