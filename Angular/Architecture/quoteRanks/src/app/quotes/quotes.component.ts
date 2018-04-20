import { Component, Input, Output, OnChanges } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnChanges {
  quotes: Array<Quote> = [];
  voteCount = 0;


  // update voteCount info from quote-list
  updateVoteOrDelete() {
    // update vote count

    // sort quotes array based on voteCount

    // delete quote

  }

  // send quotes array to quote list
  ngOnChanges() {

  }

  // receive info frm new-quote
  addNewQuote(quote) {
    this.quotes.push(quote);
    console.log(this.quotes);
  }



  constructor() { }


}
