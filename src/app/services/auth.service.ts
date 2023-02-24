import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs';
import { HandleService } from './handle.service';

interface Auth {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://fakestoreapi.com/auth/login'

  constructor(
    private http:HttpClient,
    private handle:HandleService
  ) { }

  login(username:string, password:string){
    return this.http.post<Auth>(this.url,{ username, password }).pipe(
      tap((response) => console.log(response.token)),
      catchError((error:HttpErrorResponse) => {
        return this.handle.handleError(error);
      })
    )
  }


}








