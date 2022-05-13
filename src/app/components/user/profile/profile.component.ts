import { Component, OnInit } from '@angular/core';
import { NbDialogModule, NbDialogService } from '@nebular/theme';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser : User

  constructor(
    private _userService : UserService,
    private _authService : AuthService,
  ) { }

  ngOnInit(): void {
    this._userService.getProfile(this._authService.currentUser.id).subscribe(
        (u : User) => this.currentUser = u
      )
  }
}
