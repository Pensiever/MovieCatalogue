import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbDatepickerModule, NbDialogModule, NbToastrModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { MovieComponent } from './components/movie/movie.component';
import { DetailsComponent } from './components/movie/details/details.component';
import { detailComponent } from './components/person/detail/detail.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';

import { TokenInterceptor } from './tools/token.interceptor';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AdminMenuComponent } from './components/nav/menu-admin/menu-admin.component';
import { AddComponent } from './components/movie/add/add.component';
import { addComponent } from './components/person/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AdminPageComponent,
    MovieComponent,
    DetailsComponent,
    detailComponent,
    NewCommentComponent,
    ProfileComponent,
    AdminMenuComponent,
    AddComponent,
    addComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    FormsModule,
    NbToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NbSpinnerModule,
    NbSelectModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
