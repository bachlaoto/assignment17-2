import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddClubComponent} from './club/add-club/add-club.component';
import {ListClubComponent} from './club/list-club/list-club.component';
import {EditClubComponent} from './club/edit-club/edit-club.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-club', component: AddClubComponent},
  {path: 'list-club', component: ListClubComponent},
  {path: 'edit-club', component: EditClubComponent},
  {path: '', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
