import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buildings = {
    farm: {
      name: 'Farm',
      action: 'earns 2-5 Gold',
      logMessage: 'you earned ${gold} gold at the Farm'
    },
    cave: {
      name: 'Cave',
      action: 'earns 5-10 Gold',
      logMessage: 'you earned ${gold} gold at the Cave'
    },
    casino: {
      name: 'Casino',
      action: 'earn or lose upto 100 Gold',
      logMessage: 'you earned ${gold} gold at the Farm'
    },
    house: {
      name: 'House',
      action: 'earns 7-15 Gold',
      logMessage: 'you earned ${gold} gold at the Farm'
    },
  };

}
