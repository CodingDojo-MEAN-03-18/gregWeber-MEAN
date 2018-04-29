import { Component, OnInit } from '@angular/core';
import { ProductManagerService } from '../product-manager.service';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productManagmerService: ProductManagerService,
    private router: Router,
  ) { }

  onSubmit(formData: NgForm) {
    console.log(this.product);
    this.productManagmerService.createProduct(this.product);
    this.product = new Product();
    formData.reset();
    this.router.navigateByUrl('/product/list');
  }

  ngOnInit() {}

}
