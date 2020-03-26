import { Component, OnInit } from '@angular/core';
import { FullUser } from 'src/app/models/fullUser';
import { UsersService } from 'src/app/services/users.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {
  items = ["name","username","email","phone","website"]
  itemsAddress = ["street","suite","city","zipcode"]
  itemsCompany = ["catchPhrase","name","bs"]
  userToAdd ;

  
  constructor(public usersService : UsersService, public router:Router) { 
    this.userToAdd = {id:0,name:"",username:"",email:"",phone:"",website:"",
    address:{street:"",suite:"",city:"",zipcode:"",geo: { lat:"",lng:""},},
    company:{catchPhrase:"",name:"",bs:""}
    }
  }

  ngOnInit(): void {
    if(!this.usersService.cargado){
      this.usersService.loadUsers();
      console.log(this.userToAdd)
    }
  }
  delete(i){
    this.usersService.removeUser(i)
  }
  navegar(i){
    this.router.navigate(['user', i])
  }
  agregar(){
    this.userToAdd.id = this.usersService.usuarios.length + 1;
    let newUser : FullUser = (this.userToAdd)
    this.usersService.addUser(newUser)
    this.userToAdd = {id:0,name:"",username:"",email:"",phone:"",website:"",
    address:{street:"",suite:"",city:"",zipcode:"",geo: { lat:"",lng:""},},
    company:{catchPhrase:"",name:"",bs:""}
    }
    
  }

}
