import { Component, OnInit } from '@angular/core';
import { MatchupService } from './services/matchup/matchup.service';
import { Team } from './interfaces/team';
import { Match } from './interfaces/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public matchesA: Match[] = this._matchups.matchesA;
  public matchesB: Match[] = this._matchups.matchesB;
  public matchesC: Match[] = this._matchups.matchesC;
  public matchesD: Match[] = this._matchups.matchesD;
  public matchesE: Match[] = this._matchups.matchesE;
  public matchF: Match = this._matchups.matchF;
  private _progressMatrix = this._matchups.matchProgression;

  constructor(
    private _matchups: MatchupService
  ) { }

  selectWinner(index, id, winningTeam: Team, isDisabled): void {
    if (!isDisabled) {
      console.log(index, id, winningTeam);
      if (!id.indexOf('A')) {
        this.matchesA[index].winner = winningTeam;
        const nextRoundIndex = this._progressMatrix[id] - 1;
        if (index % 2) {
          this.matchesB[nextRoundIndex].team2 = winningTeam;
        } else {
          this.matchesB[nextRoundIndex].team1 = winningTeam;
        }
      } else if (!id.indexOf('B')) {
        this.matchesB[index].winner = winningTeam;
        const nextRoundIndex = this._progressMatrix[id] - 1;
        if (index % 2) {
          this.matchesC[nextRoundIndex].team2 = winningTeam;
        } else {
          this.matchesC[nextRoundIndex].team1 = winningTeam;
        }
      } else if (!id.indexOf('C')) {
        this.matchesC[index].winner = winningTeam;
        const nextRoundIndex = this._progressMatrix[id] - 1;
        if (index % 2) {
          this.matchesD[nextRoundIndex].team2 = winningTeam;
        } else {
          this.matchesD[nextRoundIndex].team1 = winningTeam;
        }
      } else if (!id.indexOf('D')) {
        this.matchesD[index].winner = winningTeam;
        const nextRoundIndex = this._progressMatrix[id] - 1;
        if (index % 2) {
          this.matchesE[nextRoundIndex].team2 = winningTeam;
        } else {
          this.matchesE[nextRoundIndex].team1 = winningTeam;
        }
      } else if (!id.indexOf('E')) {
        this.matchesE[index].winner = winningTeam;
        const nextRoundIndex = this._progressMatrix[id] - 1;
        if (index % 2) {
          this.matchF.team2 = winningTeam;
        } else {
          this.matchF.team1 = winningTeam;
        }
      }
    }
  }

}
