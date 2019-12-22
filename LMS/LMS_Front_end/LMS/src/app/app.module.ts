import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { SearchUsersComponent } from './admin/search-users/search-users.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { ViewLibrarianComponent } from './admin/view-librarian/view-librarian.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { StudentheaderComponent } from './student/studentheader/studentheader.component';
import { ViewBookComponent } from './student/view-book/view-book.component';
import { LibraryComponent } from './library/library.component';
import { IssueBookComponent } from './library/issue-book/issue-book.component';
import { AddBooksComponent } from './library/add-books/add-books.component';
import { ManageBooksComponent } from './library/manage-books/manage-books.component';
import { SearchBookComponent } from './student/search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminHomeComponent,
    ViewUsersComponent,
    SearchUsersComponent,
   
    AdminHeaderComponent,
   
    StudenthomeComponent,
   
    AddUserComponent,
   
    ViewStudentComponent,
   
    ViewLibrarianComponent,
   
    ManageUsersComponent,
   
    StudentheaderComponent,
   
    ViewBookComponent,
   
    LibraryComponent,
    IssueBookComponent,
   
    AddBooksComponent,
   
    ManageBooksComponent,
   
    SearchBookComponent,
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '' , component : LoginComponent},
      {path : 'adminhome' , component : AdminHomeComponent},
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
