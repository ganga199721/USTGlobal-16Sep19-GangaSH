import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userId;
  constructor(private http: HttpClient) { }
   
  loginUser(user): Observable <any>{
    return this.http.get<any>(`http://localhost:8080/lms/user-login/${user.user_id}/${user.user_password}`);
  }
}
