import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }
  addProduct(product): Observable <any>{
    return this.http.post<any>(`http://localhost:8080/add-product`,product);
  }
  viewProduct(){
    return this.http.get<any>(`http://localhost:8080/view-all-product`);
  }
  updateProduct(product): Observable <any>{
    return this.http.post<any>(`http://localhost:8080/update-product`,product);
  }
  deleteProduct(product) {
    return this.http.get<any>(`http://localhost:8080/delete-product/${product.id}`);
  }
}
