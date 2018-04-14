import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time-Zone Display';
  clicked = {
    pst: false,
    mst: false,
    cst: false,
    est: false,
  };
  time = Date.now();
  onBtnClick(offset, btn) {
    // adjust for timezone - starts off in PST zone and clears back to PST
    if (offset > 0) {
      this.time = Date.now()
      this.time += 3600000 * offset;
    } else {
      this.time = Date.now();
    }
    // change state of clicked btn
    for (const key in this.clicked) {
      this.clicked[key] = key === btn ? true: false;
    }
  }
}
