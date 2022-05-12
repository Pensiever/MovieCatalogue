import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Person } from 'src/app/models/movie.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class addComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _ref : NbDialogRef<addComponent>,
    private _person : PersonService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      fn : [null, Validators.required],
      ln : [null, Validators.required]
    })
  }

  submitForm(){
    let person : Person = {lastName : this.fg.value['ln'], firstName : this.fg.value['fn']}
    this._person.create(person).subscribe(() => this._ref.close())
  }

}
