import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  // abre un cuadro de dialogo modal de window, para que el usuario confirme o no la salida de la pagina sin antes guardar.
  confirm(){
    const confirmation = confirm('¿Estas seguro que deseas salir de la página?');
    return confirmation;
  }

}
