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
import {TournamentOrganizerService} from './service/tournamentOrganizer.service';
import {TournamentService} from './service/tournament.service';
import {ListRefRankingCodeComponent} from './refrankingcode/list-refrankingcode/list-refrankingcode.component';
import {AddRefRankingCodeComponent} from './refrankingcode/add-refrankingcode/add-refrankingcode.component';
import {EditRefRankingCodeComponent} from './refrankingcode/edit-refrankingcode/edit-refrankingcode.component';


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
    EditRefRankingCodeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, ClubService, ActualTournamentSponsorService, MatchService, PlayerService
    , PlayerTournamentParticipationService, RefRankingCodeService, RefResultCodeService, SponsorService
    , TournamentOrganizerService, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
