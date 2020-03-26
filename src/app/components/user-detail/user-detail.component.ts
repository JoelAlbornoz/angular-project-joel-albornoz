import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FullUser } from 'src/app/models/fullUser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userId
  user : FullUser;

  constructor(public usersService : UsersService) {

   }

  ngOnInit(): void {
    this.user=this.usersService.usuarios[this.userId]
  }

}
