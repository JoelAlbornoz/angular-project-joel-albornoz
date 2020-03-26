import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UserComponent } from './pages/user/user.component';
import { ParamsGuard } from './guards/params.guard';



const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'test', component: TestComponentComponent, canActivate: [AuthGuard] },
{ path: 'users', component: UsuariosComponent, canActivate: [AuthGuard] },
{ path: 'user/:id', component: UserComponent, canActivate:[AuthGuard, ParamsGuard] },
{ path: 'user', component: UserComponent, canActivate:[AuthGuard, ParamsGuard] },
{ path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
