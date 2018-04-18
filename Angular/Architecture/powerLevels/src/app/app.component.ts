import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number;
  onSubmit(input: NgForm) {
    console.log('powerLevel: ', input.value);
    this.amount = input.value.powerLevel;
    // set amount to 100 if user imputs greater than
    this.amount = this.amount > 100 ? 100 : this.amount;
    // set to 1 if user inputs 0 or less
    this.amount = this.amount < 1 ? 1 : this.amount;
    // formData.reset();
  }
}
