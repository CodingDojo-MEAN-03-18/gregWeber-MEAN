import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GoldService {
  currGold = 0;
  gold = 0;
  gold$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  message = '';
  log: string[] = [];
  log$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  // method to generate gold based on random number and the building
  generateGold(building: string): void {
    if (building === 'Farm') {
      this.currGold = this.randomNum(2, 5);
      this.gold += this.currGold;
    } else if (building === 'Cave') {
      this.currGold = this.randomNum(5, 10);
      this.gold += this.currGold;
    } else if (building === 'House') {
      this.currGold = this.randomNum(5, 10);
      this.gold += this.currGold;
    } else if (building === 'Casino') {
      this.currGold = this.randomNum(-100, 100);
      this.gold += this.currGold;
    }
    // generate message
    if (this.currGold > 0) {
      this.message = `you earned ${this.currGold} gold at the ${building}`;
    } else {
      this.message = `you lost ${this.currGold} gold at the Casino</p>`;
    }
    // add message to log
    this.log.unshift(this.message);
    console.log(this.currGold, this.gold, this.message, this.log);

    // update behavior subjects
    this.gold$.next(this.gold);
    this.log$.next(this.log);
  }
  // random number generator
  randomNum(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
}
