import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  addUser(user): Observable <any>{
    return this.http.post(`http://localhost:8080/lms/add-user`,user);

 }
 viewUser(userType): Observable <any>{
  return this.http.get<any>(`http://localhost:8080/lms/view-user/${userType}`);
}
viewAllUser(): Observable <any>{
  return this.http.get<any>(`http://localhost:8080/lms/view-all-users`);
}
deleteUser(user): Observable <any>{
  return this.http.delete<any>(`http://localhost:8080/lms/delete-user/${user.user_id}`);
}
updateUser(user): Observable <any>{
  return this.http.put<any>(`http://localhost:8080/lms/update-user`,user);
}
}
