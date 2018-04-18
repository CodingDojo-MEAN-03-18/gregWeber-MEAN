import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-saiyan',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})
export class SaiyanComponent extends HumanComponent {

  multiplier = 10;

}
