import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  userId: number;
  constructor( public route:ActivatedRoute) { 
     this.route.paramMap.subscribe((res)=>{console.log(res.get('id'))
     this.userId = parseInt(res.get('id'))
    })
  }

  ngOnInit(): void {
  }

}
