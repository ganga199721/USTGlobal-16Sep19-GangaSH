import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private http: HttpClient) {
    
}
getInbox(): Observable <any>{
  return this.http.get(`http://localhost:8080/displayindedx`);
}
compose(email): Observable <any>{
  return this.http.post(`http://localhost:8080/composeMail`,email);
}
delete(email): Observable <any>{
  return this.http.get(`http://localhost:8080/deleteMail/1`);
}
}
