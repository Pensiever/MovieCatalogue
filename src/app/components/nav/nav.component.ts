import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public items : NbMenuItem[]
  public adminMenu : NbMenuItem[]
  subAuth : Subscription
  isAdmin : boolean

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    this.subAuth = this._auth.isConnectedSubject.subscribe(() =>
      {
        this.isAdmin = localStorage.getItem('role') == 'admin' ? true : false
      })
    this._auth.emitIsConnected()

    this.items = [
      { link : '/movie', title : "Liste de film"}
    ]
  }
}
