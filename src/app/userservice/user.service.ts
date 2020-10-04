import { Injectable } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Reposits } from '../reposits';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser: Users;
  allReposit: Reposits;

  constructor(private http: HttpClient) {
    this.foundUser = new Users("","","","",0,0,0,"",new Date);
    this.allReposit = new Reposits("","","",new Date,0,0,"");
   }

   searchUser(searchName: string){
     interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_reposit:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
     }

     return new Promise((resolve, reject) =>{
       this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
         (result) => {
           this.foundUser = result;
           console.log(this.foundUser);
           resolve();
         },
         (error) =>{
           console.log(error);
           reject();
         }
       );
     });
   }

   getReposits(searchName){
     interface Reposits{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
     }
     return new Promise((resolve,reject) =>{
       this.http.get<Reposits>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
         (results) =>{
           this.allReposit = results;
           resolve();
         },
         (error) =>{
           console.log(error);
           reject();
         }
       );
     });
   }
}
