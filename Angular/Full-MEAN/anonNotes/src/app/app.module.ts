import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteService } from './note.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { ListNoteComponent } from './list-note/list-note.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    ListNoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
