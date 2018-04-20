import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent {
  sortBy = 'voteCount';
  // recieve quotes array data
  @Input() quoteList: Quote[];
  // send voteCount/deleteQuote data to parent
  @Output() onVoteUp = new EventEmitter();

  constructor() { }

  voteUp(quote: Quote) {
    quote.voteCount++;
  }
  voteDown(quote: Quote) {
    quote.voteCount--;
  }
  deleteQuote(quote: Quote) {
    this.quoteList = this.quoteList.filter(q => q !== quote);
  }

}
