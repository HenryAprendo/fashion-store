import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  handleError(error:HttpErrorResponse): Observable<never> {
    if(error.status === HttpStatusCode.NotFound){
      return throwError(() => HttpStatusCode.NotFound);
    }
    else if(error.status === HttpStatusCode.Unauthorized){
      return throwError(() => HttpStatusCode.Unauthorized);
    }
    else {
      return throwError(() => 'Ups an error occurred');
    }
  }

}
