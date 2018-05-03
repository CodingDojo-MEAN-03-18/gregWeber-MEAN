import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNoteComponent } from './list-note/list-note.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'note',
    component: AppComponent
  },
  {
    path: 'notes',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
