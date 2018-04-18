import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})

export class HumanComponent implements OnInit, OnChanges {
  multiplier = 1;
  // constructor object referencing name property
  className = this.constructor.name;

  @Input() powerInput = 0;

  ngOnChanges() {
    // set amount to 100 if user imputs greater than
    this.powerInput = this.powerInput > 100 ? 100 : this.powerInput;
    // set to 1 if user inputs 0 or less
    this.powerInput = this.powerInput < 1 ? 1 : this.powerInput;
    // adjust power level for each component
    this.powerInput *= this.multiplier;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

