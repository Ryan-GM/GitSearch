import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice/user.service';
import { Reposits } from '../reposits'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  reposit: Reposits;

  constructor(public repositService: UserService) { }
    repositSearch(searchName){
      this.repositService.getReposits(searchName).then(
        (results) =>{
          this.reposit=this.repositService.allReposit
          console.log(this.reposit);
        },
        (error) =>{
          console.log(error);
        }
      );
    }
  

  ngOnInit(): void {
  }

}
