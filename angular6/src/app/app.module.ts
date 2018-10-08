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
import { ListClubComponent } from './club/list-club/list-club.component';
import { AddClubComponent } from './club/add-club/add-club.component';
import { EditClubComponent } from './club/edit-club/edit-club.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListClubComponent,
    AddClubComponent,
    EditClubComponent
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
