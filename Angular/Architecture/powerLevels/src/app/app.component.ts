import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount = 0;

  onChange() {
    console.log('in onChange method', this.amount);
    console.log('amount after: ', this.amount);

  }

}
