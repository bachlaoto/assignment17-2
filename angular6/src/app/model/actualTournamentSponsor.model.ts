import {Sponsor} from './sponsor.model';
import {Tournament} from './tournament.model';
import {ActualTournamentSponsorId} from './actualTournamentSponsorId.model';

export class ActualTournamentSponsor {
  id: ActualTournamentSponsorId;
  sponsorId: Sponsor;
  tournamentId: Tournament;
}
