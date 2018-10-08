import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddClubComponent} from './club/add-club/add-club.component';
import {ListClubComponent} from './club/list-club/list-club.component';
import {EditClubComponent} from './club/edit-club/edit-club.component';
import {AddRefRankingCodeComponent} from './refrankingcode/add-refrankingcode/add-refrankingcode.component';
import {ListRefRankingCodeComponent} from './refrankingcode/list-refrankingcode/list-refrankingcode.component';
import {EditRefRankingCodeComponent} from './refrankingcode/edit-refrankingcode/edit-refrankingcode.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-player', component: AddClubComponent},
  {path: 'list-player', component: ListClubComponent},
  {path: 'edit-player', component: EditClubComponent},
  {path: '', component: LoginComponent},
  {path: 'add-refrankingcode', component: AddRefRankingCodeComponent},
  {path: 'list-refrankingcode', component: ListRefRankingCodeComponent},
  {path: 'edit-refrankingcode', component: EditRefRankingCodeComponent},
];

export const routing = RouterModule.forRoot(routes);
