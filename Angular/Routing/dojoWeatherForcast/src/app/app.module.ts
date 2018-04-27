import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
