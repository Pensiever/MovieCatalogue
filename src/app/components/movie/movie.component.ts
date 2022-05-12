import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  listMovie : Movie[]
  activeLink : boolean = false;
  constructor(
    private _service : MovieService
  ) { }

  ngOnInit(): void {
    this.activeLink = localStorage.getItem('token') != '' ? true : false
    this._service.getAll().subscribe((data : Movie[]) => this.listMovie = data)
    console.log(this.listMovie)
  }

}
