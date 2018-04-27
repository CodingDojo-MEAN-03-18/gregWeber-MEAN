import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitHubService } from './git-hub.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
