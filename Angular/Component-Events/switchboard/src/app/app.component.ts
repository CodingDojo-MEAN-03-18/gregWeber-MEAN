import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons = [
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
    },
    {
      green: true,
      red: false,
      text: 'ON',
      }
    ];

  onBtnClick(index) {
    console.log('clicked on button:', index);
    for (let i = 0; i < this.buttons.length; i++) {
      if (i === index) {
        if (this.buttons[i].green) {
          this.buttons[i].text = 'OFF';
          this.buttons[i].green = false;
          this.buttons[i].red = true;
        } else {
          this.buttons[i].text = 'ON';
          this.buttons[i].green = true;
          this.buttons[i].red = false;
        }
      }
    }
  }
}
