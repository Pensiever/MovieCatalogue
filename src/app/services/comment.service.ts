import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment } from '../models/movie.model';
import { User } from '../models/User.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseAdress : string = "https://localhost:44331/api";

  constructor(
    private _client : HttpClient
  ) { }

  getByMovieId(Id : number) :Observable<Comment[]> {
    return this._client.get<Comment[]>(this.baseAdress+"/Comment/"+Id)
  }

  addComment(c : Comment) {
    this._client.post(this.baseAdress+"/Comment", c).subscribe( {
      next : () =>{},
      error : (error) => console.log(error),
      complete : () => {}
    })
  }

  delete(id : number) : Observable<any> {
    return this._client.delete(this.baseAdress+"/Comment/"+id)
  }
}
function mergeMap(mergeMap: any): Observable<Comment[]> {
  throw new Error('Function not implemented.');
}
