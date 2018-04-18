import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {

  message: string;

  @Input() powerInput: number;

  ngOnChanges() {
    if (this.powerInput) {
      this.powerInput *= 250;
    }
    if (this.powerInput > 20000) {
      this.message = 'Superlative!';
    } else {
      this.message = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
