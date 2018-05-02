import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {

  // notes$: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }
  // route for API
  private base = '/api/notes';

  getNotes() {
    return this.http.get<Note[]>(this.base);
  }

  createNote(note: Note): Observable<Note> {
    console.log('note in service method ', note);
    // send to server/db for creation
    return this.http.post<Note>(this.base, note);
    // this.getNotes();
  }

}
