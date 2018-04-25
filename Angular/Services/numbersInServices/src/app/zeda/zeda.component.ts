import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-zeda',
  templateUrl: './zeda.component.html',
  styleUrls: ['./zeda.component.css']
})
export class ZedaComponent implements OnInit {

  diff: number;

  constructor(private _numbersService: NumbersService) { }

  ngOnInit() {
    // this.diff = this._numbersService.difference;
    this._numbersService.difference$.subscribe(number => {
      console.log('retrieved number ', number);
      this.diff = number;
    });
    // console.log(this.diff);

  }

  onClick() {
    this._numbersService.generateDifference();
    // console.log('click, ', this.diff);
  }

}
