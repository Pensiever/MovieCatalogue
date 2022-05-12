import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Movie, MovieToApi, SetRole } from '../models/movie.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseAdress : string = "https://localhost:44331/api"

  constructor(
    private _client : HttpClient,
    private _router : Router
    ) { }

  getAll() : Observable<Movie[]> {
    return this._client.get<Movie[]>(this.baseAdress+"/Movie")
  }

  getOne(id : number) : Observable<Movie> {
    return this._client.get<Movie>(this.baseAdress+"/Movie/"+id)

  }

  post(m : MovieToApi) {
    this._client.post<any>(this.baseAdress+"/Movie", m).subscribe(
      (x : any) => {

        for(let i = 0; i < m.actors.length; i++){
          m.actors[i].movieId=x
          this._client.post(this.baseAdress+"/Person/setActor",m.actors[i]).subscribe(()=>{})
        }
        this._router.navigate(['/movie'])
      }
      )
  }
}
