import {Player} from './player.model';
import {Tournament} from './tournament.model';

export class PlayerTournamentParticipation {

  // id: PlayerTournamentParticipationId;
  id: any;
  players: Player;
  tournaments: Tournament;
  finalResult: String;
}
