import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})

export class SuperSaiyanComponent extends HumanComponent {

  multiplier = 90;

}
