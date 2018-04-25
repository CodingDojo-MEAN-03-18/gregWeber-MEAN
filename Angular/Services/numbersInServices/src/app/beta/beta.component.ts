import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: Array<number> = [];

  constructor(private _numbersService: NumbersService) { }

  ngOnInit() {
    this.numbers = this._numbersService.nums2;
  }

  onClick() {
    const number = this._numbersService.generateNumber();
    this._numbersService.nums2.push(number);
  }

}
