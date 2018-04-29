import { Component, OnInit } from '@angular/core';
import { ProductManagerService } from '../product-manager.service';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product[];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private productManagerService: ProductManagerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = parseInt(params.get('id'), 10);
        this.product = this.productManagerService.products$.getValue().filter(prod => prod.id === this.id);
      });
  }

  onEditSubmit() {
    console.log('in edit submit: ', this.product);
    this.router.navigateByUrl('/product/list');
  }
}

