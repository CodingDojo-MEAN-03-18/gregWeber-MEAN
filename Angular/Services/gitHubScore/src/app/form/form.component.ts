import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitHubService } from '../git-hub.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName = '';
  error = false;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
  }
  onSubmit() {
    // console.log(this.userName);
    // call on git-hub.service to send get response with the users name
    this.gitHubService.getUser(this.userName).subscribe(() => {},
      error => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    );
  }
  clearInputField() {
    this.userName = '';
  }
}
