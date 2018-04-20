import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent {
  quote: Quote = new Quote;
  @Output() addQuote = new EventEmitter();

  // method to grab form data, create quote, and send new quote to parent
  onSubmit(formData: NgForm) {
    // this.quote = formData.value;
    // call event emitter
    console.log(this.quote);

    this.addQuote.emit(this.quote);
    // reset quote and form
    this.quote = new Quote;
    formData.reset();
  }
}
