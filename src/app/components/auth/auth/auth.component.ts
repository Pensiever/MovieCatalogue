import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isConnectedSub : Subscription;
  currentUser : User = new User();
  connected : boolean;

  get test() : string {
    return localStorage.getItem('role')
  }

  constructor(
    private _authService :AuthService
  ) { }

  ngOnInit(): void {

    this._authService.currentUserSubject.subscribe((u : User)=> {this.currentUser = u;})

    this.isConnectedSub = this._authService.isConnectedSubject.subscribe(
       (x : boolean) => {

          this.connected = x
        }
     )
     this._authService.emitUser()
     this._authService.emitIsConnected()

  }

  logout(){
    this._authService.logout()
  }

}
