import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.noteService.createNote(form.value).subscribe(
      note => console.log('response from the db in new note component when creating note: ', note)
    );
    // console.log(this.note);
    this.noteService.getNotes();
    form.reset();
  }
}

