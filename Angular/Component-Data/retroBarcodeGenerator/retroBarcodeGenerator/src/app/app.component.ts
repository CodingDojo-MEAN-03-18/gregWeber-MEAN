import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  randomColors: string[] = randomOrderedColors();
}

const colors: string[] = ['BurlyWood', 'Aquamarine', 'Chartreuse', 'Coral', 'Gold', 'GoldenRod'];
// random number generator for random index of the colors array
function randomNum(): number {
  return Math.floor(Math.random() * 6);
}
// function building randomly generated array of the available colors
function randomOrderedColors(): string[] {
  const result: string[] = [];
  for (let i = 0; i < 10; i++) {
    result.push(colors[randomNum()]);
  }
  return result;
}
