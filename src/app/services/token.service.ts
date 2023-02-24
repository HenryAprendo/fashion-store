import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  save(token:string){
    localStorage.setItem('token',token);
  }

  get(): string|null {
    const token = localStorage.getItem('token');
    return token;
  }

  remove(){
    localStorage.removeItem('token');
  }

}
