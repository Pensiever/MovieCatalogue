import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/User.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUserFG : FormGroup

  constructor(
    private _service : UserService,
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.newUserFG = this._builder.group({
      email : ['', [Validators.email, Validators.required]],
      password : ['', Validators.required],
      lastName : [''],
      firstName : [''],
      birthDate : ['']
    })
  }

  onSubmit(){
    let values = this.newUserFG.value
    let newUser = new NewUser()
    newUser.email = values['email']
    newUser.password = values['password']
    newUser.birthDate = values['birthDate']
    newUser.firstName = values['firstName']
    newUser.lastName = values['lastName']

    this._service.register(newUser)
  }

}
