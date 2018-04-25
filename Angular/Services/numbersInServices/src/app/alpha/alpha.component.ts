import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: Array<number> = [];

  constructor(private _numbersService: NumbersService) { }

  ngOnInit() {
    this.numbers = this._numbersService.nums1;
  }

  onClick() {
    const number = this._numbersService.generateNumber();
    this._numbersService.nums1.push(number);
  }

}
