import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isConnected : boolean

  private baseAdress : string = "https://localhost:44331/api"

  currentUser : User;

  get isConnected(): boolean {
    return localStorage.getItem('token') != null ? true : false
  }

  isConnectedSubject : Subject<boolean> = new Subject<boolean>();
  currentUserSubject : Subject<User> = new Subject<User>();

  emitUser() {
    if(this.currentUser == null && localStorage.getItem('id')) {
      this._user.getProfile(Number.parseInt(localStorage.getItem('id'))).subscribe((data : User) => {
        this.currentUser = data
        this.currentUserSubject.next(this.currentUser)
      })
    }
    else this.currentUserSubject.next(this.currentUser)
  }


  emitIsConnected() {
    this.isConnectedSubject.next(this.isConnected)
  }

  constructor(
    private _client : HttpClient,
    private _route : Router,
    private _toast : NbToastrService,
    private _user : UserService
  ) { }

  login(email : string, password : string){
    var user = new LoginInfo();
    user.email = email;
    user.password = password;
    this._client.post<User>(this.baseAdress+"/Auth/auth",user).subscribe({
      next : (data : User) => {
        this.currentUser = data;
        localStorage.setItem("token", this.currentUser.token)
        localStorage.setItem("role", this.currentUser.isAdmin ? "admin" : "user")
        localStorage.setItem('id', data.id.toString())
        this.emitUser()
        this._toast.info('Vous êtes bien connecté !!!')
        this._route.navigate(['/movie'])
        .then(() => {
          window.location.reload();
        });
       },
      error : error =>  {console.log(error); console.log("Erreur")}
    })
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.clear()
    this.emitUser()
    this._route.navigate(['/movie'])
    .then(() => {
      window.location.reload();
    });
  }
}
export class LoginInfo {
  email : string;
  password : string;
}
