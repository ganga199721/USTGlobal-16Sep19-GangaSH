import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { LoginComponent } from './login/login.component';

 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    AddmovieComponent,
    LoginComponent,
      
     
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
  
    RouterModule.forRoot([
      {path : 'movie' ,component : MovieComponent},
      {path : 'addmovie' ,component : AddmovieComponent},
      {path : 'login' ,component : LoginComponent}
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
