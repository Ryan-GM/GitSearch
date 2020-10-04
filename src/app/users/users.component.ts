import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Reposits } from '../reposits';
import { UserService } from '../userservice/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: Users;
  reposit: Reposits;

  constructor(public myService: UserService, private repositService: UserService) { }

  search(searchName){
    this.myService.searchUser(searchName).then(
      (success) => {
        this.user = this.myService.foundUser;
      },
      (error) => {
        console.log(error)
      }
    );
    this.repositService.getReposits(searchName).then(
      (results) => {
        this.reposit=this.repositService.allReposit
        console.log(this.reposit);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
