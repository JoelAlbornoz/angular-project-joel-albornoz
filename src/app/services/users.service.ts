import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FullUser } from '../models/fullUser';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usuarios: Array<FullUser>;
  cargando= false;
  cargado = false;

  constructor(private http: HttpClient) {
     
  }


  loadUsers(){
    //solicita los datos
    this.cargando = true
    setTimeout(()=>{
      this.http.get('https://jsonplaceholder.typicode.com/users').pipe(  
    map((data) => {
        //uso pipes para formatear la respuesta a Array<FullUser>
        var res = []
        for (var item in data) {
          res.push(data[item])
        }
        return res
      })
    ).subscribe((data) => {
      this.cargando = false;
      this.cargado = true;
      this.usuarios = data;
      console.log(data)
    })

    }, 2000)
    
  }
  
  addUser(user:FullUser){
    this.usuarios.push(user)
  }

  removeUser(index){
    this.usuarios.splice(index,1)
  }

  reset(){
    this.cargado = false;
    this.cargando  = false;
    this.usuarios = []
  }
  
}
