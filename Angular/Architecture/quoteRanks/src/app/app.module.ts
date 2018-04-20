import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';
import { QuoteNewComponent } from './quotes/quote-new/quote-new.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesListComponent,
    QuoteNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
