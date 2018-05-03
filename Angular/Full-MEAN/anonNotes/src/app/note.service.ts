import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Note } from './note';


@Injectable()
export class NoteService {
  notes$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) { }
  // route for API
  private base = '/api/notes';

  getNotes() {
    return this.http.get<Note[]>(this.base).subscribe(notes => this.notes$.next(notes));
  }

  createNote(note: Note) {
    console.log('note in service method ', note);
    // send to server/db for creation
    return this.http.post<Note>(this.base, note);
  }

}
