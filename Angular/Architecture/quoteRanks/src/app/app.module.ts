import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';
import { QuoteNewComponent } from './quotes/quote-new/quote-new.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesListComponent,
    QuoteNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
