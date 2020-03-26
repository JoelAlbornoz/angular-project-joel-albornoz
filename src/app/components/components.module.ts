import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import{FormsModule} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [TestComponentComponent, LayoutComponent, LoginFormComponent, UsersGridComponent, UserCardComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[TestComponentComponent, LayoutComponent,LoginFormComponent,UsersGridComponent, UserDetailComponent],
  providers:[AuthService]
})
export class ComponentsModule { }
