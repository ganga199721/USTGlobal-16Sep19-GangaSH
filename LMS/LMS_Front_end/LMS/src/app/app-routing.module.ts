import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';

import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { ViewLibrarianComponent } from './admin/view-librarian/view-librarian.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ViewBookComponent } from './student/view-book/view-book.component';
import { LibraryComponent } from './library/library.component';
import { IssueBookComponent } from './library/issue-book/issue-book.component';
import { AddBooksComponent } from './library/add-books/add-books.component';
import { ManageBooksComponent } from './library/manage-books/manage-books.component';
import { SearchBookComponent } from './student/search-book/search-book.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  
  { path: 'adminHome', component: AdminHomeComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },
  { path: 'adduser', component: AddUserComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },
  
  { path: 'adminhome', component: AdminHomeComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },

  { path: 'viewstudent', component: ViewStudentComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },
  
  { path: 'viewlibrarian' , component : ViewLibrarianComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },

  { path : 'manageusers' , component : ManageUsersComponent,
  canActivate: [AuthGuard], data: { userType: [1] } },

  { path : 'managebook' , component : ManageBooksComponent,
  canActivate: [AuthGuard], data: { userType: [2] }},

  { path : 'library' , component : LibraryComponent,
  canActivate: [AuthGuard], data: { userType: [2] }},

  { path : 'addbooks' , component : AddBooksComponent,
  canActivate: [AuthGuard], data: { userType: [2] }},

  { path : 'issuebook' , component : IssueBookComponent,
  canActivate: [AuthGuard], data: { userType: [2] }},

  { path : 'viewbook' , component : ViewBookComponent,
  canActivate: [AuthGuard], data: { userType: [3] }},

  { path: 'studentHome', component: StudenthomeComponent,
  canActivate: [AuthGuard], data: { userType: [3] } },

  
  { path: 'searchbook', component: SearchBookComponent,
  canActivate: [AuthGuard], data: { userType: [3] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
