import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product: ProductService, private router: Router) { }
msg;
  ngOnInit() {
  }
  addProduct(form: NgForm) {
    this.msg = null;
    this.product.addProduct(form.value)
    .subscribe(Data => {
      this.msg = Data.description;
      console.log('Response after adding product', Data);
      if (Data && Data.description === 'Product added to db') {
        this.router.navigateByUrl('/add-product');
      } else {
        this.router.navigateByUrl('/add-product');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }

}
