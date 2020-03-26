import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page/test-page.component';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [TestPageComponent, LoginComponent, UsuariosComponent, UserComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[TestPageComponent]
})
export class PagesModule { }
