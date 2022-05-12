import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Cast, Actor, MovieToApi, Person, SetRole } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { PersonService } from 'src/app/services/person.service';
import { addComponent } from '../../person/add/add.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  upFile : File = null;
  url : string = "";

  fg : FormGroup
  newFG : FormGroup
  personListe : Person[] =[]

  constructor(
    private _movieService : MovieService,
    private _builder : FormBuilder,
    private _ar : ActivatedRoute,
    private _dialogService : NbDialogService,
    private _personService : PersonService
    ) { }

  ngOnInit(): void {
    this.personListe = this._ar.snapshot.data['personList']
    this.initForm()
  }

  initForm() {
    console.log(this.personListe)
    this.fg = this._builder.group({
      title : [null, Validators.required],
      desc : [null, [Validators.required, Validators.maxLength(250)]],
      releaseyear : [null, Validators.required],
      realisator : [null,null],
      scenarist : [],
      actors : this._builder.array([])
    })
  }

  submitForm() {
    let movie : MovieToApi = new MovieToApi()
    movie.title = this.fg.value['title']
    movie.description = this.fg.value['desc']
    movie.releaseYear = this.fg.value['releaseyear']
    movie.realisatorID = this.fg.value['realisator']
    movie.scenaristID = this.fg.value['scenarist']
    movie.actors = []
    let ActorFromFg = this.getActors().value


    for(let i = 0; i < this.getActors().length; i++) {
      movie.actors.push({movieId : 0, personId : ActorFromFg[i]['id'], role : ActorFromFg[i]['role']})
    }

    this._movieService.post(movie)

  }

  getActors() : FormArray {
    return this.fg.get('actors') as FormArray
  }

  addActor() {
    let id = this.getActors().length

    this.getActors().push(this._builder.group({
      id : [],
      role : []
    }))
  }

  newPerson(){
    let box = this._dialogService.open(addComponent, {
    })

    box.onClose.subscribe(() => {
      this._personService.getAll().subscribe((x : any) => this.personListe = x)
    })
  }
}
