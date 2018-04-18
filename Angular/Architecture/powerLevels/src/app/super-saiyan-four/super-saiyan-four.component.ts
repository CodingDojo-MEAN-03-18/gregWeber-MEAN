import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HumanComponent } from '../human/human.component';


@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: '../template.html',
  styleUrls: ['../app.component.css']
})

export class SuperSaiyanFourComponent extends HumanComponent {

  multiplier = 500;

}

