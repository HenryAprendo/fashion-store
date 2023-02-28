import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { HandleService } from './handle.service';
import { TokenService } from './token.service';
import { Auth } from './../models/auth/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session$ = new BehaviorSubject<boolean>(false);
  stateSession = this.session$.asObservable();

  url = 'https://fakestoreapi.com/auth/login'

  constructor(
    private http:HttpClient,
    private handle:HandleService,
    private tokenService:TokenService
  ) { }

  login(username:string, password:string): Observable<Auth>{
    return this.http.post<Auth>(this.url,{ username, password }).pipe(
      tap((response) => {
        this.tokenService.save(response.token);
        this.session$.next(true);
      }),

      catchError((error:HttpErrorResponse) => {
        return this.handle.handleError(error);
      })
      )
    }

  logout(){
    this.tokenService.remove();
    this.session$.next(false);
  }

}

















