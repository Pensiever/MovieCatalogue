import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser, User } from '../models/User.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseAdress : string = "https://localhost:44331/api";

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  register(newUser : NewUser) {
    this._client.post(this.baseAdress+"/User/register", newUser, {responseType:'text'}).subscribe({
      next : () => this._router.navigate(['/movie']),
      error : (error) => console.log(error)
    });
  }

  getProfile(id : number) : Observable<User> {
    return this._client.get<User>(this.baseAdress+"/User/"+id)
  }

  updateUser(u : User) {
    return this._client.put(this.baseAdress, u)
  }
}
