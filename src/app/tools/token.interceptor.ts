import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('token') != null) {
      let token = localStorage.getItem('token');
      let clone = req.clone({setHeaders: { "Authorization": "Bearer " + token}})
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
