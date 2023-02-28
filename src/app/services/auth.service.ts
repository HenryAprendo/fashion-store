import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { HandleService } from './handle.service';
import { TokenService } from './token.service';
import { Auth } from './../models/auth/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  // El observable emite un booleano true cuando hay un token producto de una sesión iniciada, en caso contrario emite false.
  session$ = new BehaviorSubject<boolean>(false);
  stateSession = this.session$.asObservable();

  url = 'https://fakestoreapi.com/auth/login'

  constructor(
    private http:HttpClient,
    private handle:HandleService,
    private tokenService:TokenService
  ) {
    this.verifySession();
  }

  ngOnInit(): void {

  }

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

  private verifySession(){
    const token = this.tokenService.get();
    if(token){
      this.session$.next(true);
    }
    else {
      this.session$.next(false);
    }
  }

}

















