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
    if (this.powerInput === 50000) {
      this.message = 'The One!';
    } else {
      this.message = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

