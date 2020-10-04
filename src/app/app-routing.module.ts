import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { RepositoryComponent } from './repository/repository.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {path: "profile-user", component:UsersComponent},
  {path: "reposit-search", component:RepositoryComponent},
  { path: '**', component:ErrorComponent},

  {path: '', redirectTo:"/profile-user", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
