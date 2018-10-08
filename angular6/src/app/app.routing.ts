import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddClubComponent} from './club/add-club/add-club.component';
import {ListClubComponent} from './club/list-club/list-club.component';
import {EditClubComponent} from './club/edit-club/edit-club.component';
import {AddRefRankingCodeComponent} from './refrankingcode/add-refrankingcode/add-refrankingcode.component';
import {ListRefRankingCodeComponent} from './refrankingcode/list-refrankingcode/list-refrankingcode.component';
import {EditRefRankingCodeComponent} from './refrankingcode/edit-refrankingcode/edit-refrankingcode.component';
import {AddPlayerComponent} from './player/add-player/add-player.component';
import {ListPlayerComponent} from './player/list-player/list-player.component';
import {EditPlayerComponent} from './player/edit-player/edit-player.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-club', component: AddClubComponent},
  {path: 'list-club', component: ListClubComponent},
  {path: 'edit-club', component: EditClubComponent},
  {path: '', component: LoginComponent},
  {path: 'add-refrankingcode', component: AddRefRankingCodeComponent},
  {path: 'list-refrankingcode', component: ListRefRankingCodeComponent},
  {path: 'edit-refrankingcode', component: EditRefRankingCodeComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path: 'list-player', component: ListPlayerComponent},
  {path: 'edit-player', component: EditPlayerComponent},
];

export const routing = RouterModule.forRoot(routes);
