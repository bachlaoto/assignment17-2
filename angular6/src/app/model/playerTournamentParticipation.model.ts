import {PlayerTournamentParticipationId} from './playerTournamentParticipationId.model';
import {Player} from './player.model';
import {Tournament} from './tournament.model';

export class PlayerTournamentParticipation {

  id: PlayerTournamentParticipationId;
  players: Player;
  tournaments: Tournament;
  finalResult: String;
}
