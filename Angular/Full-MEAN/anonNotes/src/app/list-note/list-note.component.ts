import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';


@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
  ) { }


  ngOnInit() {
    this.noteService.notes$.subscribe(notes => this.notes = notes);
  }

}
