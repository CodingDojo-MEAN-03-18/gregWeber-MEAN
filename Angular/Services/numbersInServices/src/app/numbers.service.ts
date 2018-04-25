import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NumbersService {
  // constainers for the numbers
  nums1: number[] = [];
  nums2: number[] = [];
  difference = 0;
  difference$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  randNum: number;

  generateNumber(): number {
    const num = Math.floor(Math.random() * 11);
    return num;
  }

  constructor() { }

  // method for generating difference of the sums two arrays of numbers
  generateDifference(): number {
    console.log(this.nums1, this.nums2);
    const sum1: number = this.sumArray(this.nums1);
    const sum2: number = this.sumArray(this.nums2);
    this.difference = sum1 - sum2;

    console.log('generating difference...', sum1, sum2, this.difference);
    this.difference$.next(this.difference)
    return this.difference;
  }

  // helper
  sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }

}
