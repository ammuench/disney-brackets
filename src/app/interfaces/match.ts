import { Team } from './team';

export interface Match {
    id: string;
    team1?: Team;
    team2?: Team;
    winner?: Team;
}
