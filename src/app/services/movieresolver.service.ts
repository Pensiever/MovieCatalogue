import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { MovieService } from './movie.service'

@Injectable({
  providedIn: 'root'
})
export class MovieresolverService implements Resolve<Movie> {

  constructor(
    private _service : MovieService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Movie | Observable<Movie> | Promise<Movie> {
    return this._service.getOne(route.params['id'])
  }
}
