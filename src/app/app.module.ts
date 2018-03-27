import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatchupService } from './services/matchup/matchup.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MatchupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
