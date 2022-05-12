import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DetailsComponent } from './components/movie/details/details.component';
import { MovieComponent } from './components/movie/movie.component';
import { detailComponent } from './components/person/detail/detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { IsAuthGuard } from './tools/auth-guard.service';
import { MovieresolverService} from './services/movieresolver.service';
import { AddComponent } from './components/movie/add/add.component';
import {PersonResolver} from './services/personresolver.service'
const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'adminPanel', component : AdminPageComponent},
  { path : 'movie', component : MovieComponent },
  { path : 'addMovie', resolve : {personList : PersonResolver}, component : AddComponent},
  { path : 'detail/:id', resolve : {movie : MovieresolverService}, canActivate : [IsAuthGuard], component : DetailsComponent},
  { path : 'pdetail/:id', component : detailComponent},
  { path : 'profile', component : ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
