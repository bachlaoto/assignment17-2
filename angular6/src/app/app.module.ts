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
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, ClubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
