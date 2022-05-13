import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class AdminMenuComponent implements OnInit {

  adminMenu : NbMenuItem[]
  constructor() { }

  ngOnInit(): void {
    this.adminMenu = [
      { link : '/addMovie', title : 'Ajouter un film'}
      // { link : '/setAdmin', title : 'Changer Admin'}
    ]
  }

}
