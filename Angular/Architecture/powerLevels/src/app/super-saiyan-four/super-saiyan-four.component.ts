import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {

  message: string;

  @Input() powerInput: number;

  ngOnChanges() {
    if (this.powerInput) {
      this.powerInput *= 500;
    }
    if (this.powerInput > 9000 && this.powerInput <= 20000) {
      this.message = 'Over 9000!'
    } else if (this.powerInput > 20000 && this.powerInput < 50000) {
      this.message = 'Superlative!';
    } else if (this.powerInput === 50000) {
      this.message = 'The One!';
    } else {
      this.message = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

