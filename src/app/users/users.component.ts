import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { Reposit } from '../repository';
import { UserService } from '../userservice/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  reposit: Reposit;

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
    this.repositService.getReposit(searchName).then(
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
