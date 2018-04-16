import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  user: User = new User();
  users: Array<User> = [];
  onSubmit(formData: NgForm) {
    // event.preventDefault();
    console.log(formData.value);
    this.users.push(this.user);
    this.user = new User();
    formData.reset();
  }
}
