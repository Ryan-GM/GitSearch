import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { UsersComponent } from './users/users.component';
import { DateCountPipe } from './date-count.pipe';
import { SearchFComponent } from './search-f/search-f.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UsersComponent,
    DateCountPipe,
    SearchFComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
