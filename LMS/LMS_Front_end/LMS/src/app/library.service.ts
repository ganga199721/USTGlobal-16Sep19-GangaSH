import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }
  addBook(book): Observable <any>{
    return this.http.post<any>(`http://localhost:8080/lms/add-book`,book);
  }
  getRequestBook(): Observable <any> {
    return this.http.get<any>(`http://localhost:8080/lms/view-requested-book`);
  }
  getRequestStudent(): Observable <any> {
    return this.http.get<any>(`http://localhost:8080/lms/view-requested-student`);
  }

  issueBook(selectedBook, status) {
    return this.http.get<any>(`http://localhost:8080/lms/issue-book/${selectedBook.bid}/${status}`);
  }

  declineBook(selectedBook, status) {
    return this.http.get<any>(`http://localhost:8080/lms/decline-book/${selectedBook.bid}`);
  }
  deleteBook(selectedBook) {
    return this.http.get<any>(`http://localhost:8080/lms/delete-book/${selectedBook.bid}`);
  }
  viewAllBooks(): Observable <any>{
    return this.http.get<any>(`http://localhost:8080/lms/view-books`);
  }
  updateBook(book): Observable <any>{
    return this.http.put<any>(`http://localhost:8080/lms/update-book`,book);
  }
}
