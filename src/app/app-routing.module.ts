import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FrontComponent } from './front/front.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [{
  path: '', redirectTo: 'front', pathMatch: 'full'},
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'search', component:SearchComponent },
  { path: 'login', component: LoginComponentComponent },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuardService],
  },

  {path:'favorite',component:FavoriteComponent},
  {path:'front',component:FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
