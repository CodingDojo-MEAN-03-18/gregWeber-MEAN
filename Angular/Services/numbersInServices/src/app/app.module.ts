import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NumbersService } from './numbers.service';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { ZedaComponent } from './zeda/zeda.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    ZedaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
