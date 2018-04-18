import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})
export class SuperSaiyanThreeComponent extends HumanComponent {

  multiplier = 250;

}
