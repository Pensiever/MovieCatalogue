import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CPerson, Person } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseAdress : string = "https://localhost:44331/api";
  constructor(
    private _client : HttpClient
  ) { }

  getOne(id : number) : Observable<CPerson>
    {
      return this._client.get<CPerson>(this.baseAdress+"/Person/"+id)
    }

  getAll() : Observable<Person[]> {
    return this._client.get<Person[]>(this.baseAdress+"/Person/")
  }

  create(person : Person) {
    return this._client.post(this.baseAdress+"/Person", person, {responseType : 'text'})
  }
}
