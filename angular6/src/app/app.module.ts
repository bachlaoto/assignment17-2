import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {routing} from './app.routing';
import {AuthenticationService} from './service/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {ClubService} from './service/club.service';
import {ListClubComponent} from './club/list-club/list-club.component';
import {AddClubComponent} from './club/add-club/add-club.component';
import {EditClubComponent} from './club/edit-club/edit-club.component';
import {ListSponsorComponent} from './sponsor/list-sponsor/list-sponsor.component';
import {AddSponsorComponent} from './sponsor/add-sponsor/add-sponsor.component';
import {EditSponsorComponent} from './sponsor/edit-sponsor/edit-sponsor.component';
import {ListPlayerComponent} from './player/list-player/list-player.component';
import {AddPlayerComponent} from './player/add-player/add-player.component';
import {EditPlayerComponent} from './player/edit-player/edit-player.component';
import {ActualTournamentSponsorService} from './service/actualTournamentSponsor.service';
import {MatchService} from './service/match.service';
import {PlayerService} from './service/player.service';
import {PlayerTournamentParticipationService} from './service/playerTournamentParticipation.service';
import {RefRankingCodeService} from './service/refRankingCode.service';
import {RefResultCodeService} from './service/refResultCode.service';
import {SponsorService} from './service/sponsor.service';
import {OrganizerService} from './service/organizer.service';
import {TournamentService} from './service/tournament.service';
import {ListRefRankingCodeComponent} from './refrankingcode/list-refrankingcode/list-refrankingcode.component';
import {AddRefRankingCodeComponent} from './refrankingcode/add-refrankingcode/add-refrankingcode.component';
import {EditRefRankingCodeComponent} from './refrankingcode/edit-refrankingcode/edit-refrankingcode.component';
import {ListRefResultCodeComponent} from './refResultCode/list-refresultcode/list-refresultcode.component';
import {AddRefResultCodeComponent} from './refResultCode/add-refresultcode/add-refresultcode.component';
import {EditRefResultCodeComponent} from './refResultCode/edit-refresultcode/edit-refresultcode.component';
import {ListTournamentComponent} from './tournament/list-tournament/list-tournament.component';
import {AddTournamentComponent} from './tournament/add-tournament/add-tournament.component';
import {EditTournamentComponent} from './tournament/edit-tournament/edit-tournament.component';
import {ListOrganizerComponent} from './organizer/list-organizer/list-organizer.component';
import {AddOrganizerComponent} from './organizer/add-organizer/add-organizer.component';
import {EditOrganizerComponent} from './organizer/edit-organizer/edit-organizer.component';
import {ListPlayerTournamentParticipationComponent} from './playertournamentparticipation/list-player-tournament-participation/list-playertournamentparticipation.component';
import {AddPlayerTournamentParticipationComponent} from './playertournamentparticipation/add-player-tournament-participation/add-playertournamentparticipation.component';
import {EditPlayerTournamentParticipationComponent} from './playertournamentparticipation/edit-player-tournament-participation/edit-playertournamentparticipation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListClubComponent,
    AddClubComponent,
    EditClubComponent,
    ListSponsorComponent,
    AddSponsorComponent,
    EditSponsorComponent,
    ListPlayerComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    ListRefRankingCodeComponent,
    AddRefRankingCodeComponent,
    EditRefRankingCodeComponent,
    ListRefResultCodeComponent,
    AddRefResultCodeComponent,
    EditRefResultCodeComponent,
    ListTournamentComponent,
    AddTournamentComponent,
    EditTournamentComponent,
    ListOrganizerComponent,
    AddOrganizerComponent,
    EditOrganizerComponent,
    ListPlayerTournamentParticipationComponent,
    AddPlayerTournamentParticipationComponent,
    EditPlayerTournamentParticipationComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, ClubService, ActualTournamentSponsorService, MatchService, PlayerService
    , PlayerTournamentParticipationService, RefRankingCodeService, RefResultCodeService, SponsorService
    , OrganizerService, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
