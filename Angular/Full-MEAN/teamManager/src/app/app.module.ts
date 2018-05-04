import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { PlayersNewComponent } from './players/players-new/players-new.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersService } from './players.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    NavComponent,
    PlayersComponent,
    PlayersNewComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
