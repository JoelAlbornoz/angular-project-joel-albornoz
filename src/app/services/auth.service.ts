import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  autenticado = false
  constructor() { }


  autenticar(username, password){
    if(username === 'test' && password === 'Ayi+2020'){
      this.autenticado = true
      console.log('autenticado')
    }
    return this.autenticado
  }

  desautenticar(){
    this.autenticado= false;
    console.log('desautenticado')
  }
}
