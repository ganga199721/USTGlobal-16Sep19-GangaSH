import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private product: ProductService, private router: Router) { }
msg;
selectedProduct;
productDetails;
deleted;
  ngOnInit() {
    this.router.navigateByUrl('/view-product');
    this.viewProduct();
  }
  viewProduct() {
    this.msg = null;
    this.product.viewProduct()
    .subscribe(Data => {
      
      this.productDetails = Data.productBeans;
      console.log('Response view product', Data);
      if (Data && Data.description === 'Data Found ') {
        this.router.navigateByUrl('/view-product');
      } else {
        this.router.navigateByUrl('/view-product');
      }

    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }
  confirm(product){
    this.selectedProduct = product;
  }
  updateProduct(form: NgForm) {
    this.msg = null;
    this.product.updateProduct(form.value)
    .subscribe(Data => {
      this.msg = Data.description;
      console.log('Response after updatin product', Data);
      if (Data && Data.description === 'Product updated') {
        
        this.router.navigateByUrl('/view-product');
        this.msg = Data.description;
        this.ngOnInit();
      } else {
        this.router.navigateByUrl('/view-product');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }
  deleteProduct(product) {
   
    this.product.deleteProduct(product).subscribe(Data => {
      console.log('Response of request', Data);
      this.msg = Data.description;
      if (Data && Data.description === 'Book deleted') {
        this.ngOnInit();
        this.deleted = true;
       
      } else {
        this.router.navigateByUrl('/view-product');
      }
    }, err => {
    });
    }
    addToCart(selectedProduct){
      console.log("added to cart");
    console.log(selectedProduct)
      localStorage.setItem('selectedProd', JSON.stringify(selectedProduct));
    }

}
