import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note: Note;

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.noteService.createNote(form.value).subscribe(newNote => {
      console.log('new note from the db: ', newNote);
      // console.log(this.note);
      form.reset();
      this.noteService.getNotes();
    });
  }
}

