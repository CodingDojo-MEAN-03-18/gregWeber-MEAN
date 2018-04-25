import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoldService } from './gold.service';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
