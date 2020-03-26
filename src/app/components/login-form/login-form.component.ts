import { Component, OnInit, ErrorHandler } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User;
  error : boolean = false;

  constructor(public authService:AuthService, private router: Router, public usersService : UsersService) { 
    this.user = {username:'',password:''}
  }

  ngOnInit(): void {
    console.log(this.user)
    
   
  }
  onSubmit(){
    if(!this.authService.autenticar(this.user.username, this.user.password)){
      console.log('datos incorrectos')
      this.error = true;
      this.reset()
    }else{
      this.router.navigate(['/users'])
      this.error = false;
    }
  }
  logOut(){
    this.reset()
    this.authService.desautenticar()
    console.log(this.user)
    this.usersService.reset();
  }
  reset(){
    this.user.password = ''
    this.user.username = ''
  }

}
