import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})
export class SuperSaiyanTwoComponent extends HumanComponent {

  multiplier = 150;

}
