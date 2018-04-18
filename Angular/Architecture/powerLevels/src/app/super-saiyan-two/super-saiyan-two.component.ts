import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {

  message: string = null;

  @Input() powerInput: number;

  ngOnChanges() {
    if (this.powerInput) {
      this.powerInput *= 150;
      if (this.powerInput > 9000) {
        this.message = 'Over 9000!';
      } else {
        this.message = null;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
