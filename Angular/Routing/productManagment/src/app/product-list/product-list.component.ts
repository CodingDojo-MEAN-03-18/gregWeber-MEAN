import { Component, OnInit } from '@angular/core';
import { ProductManagerService } from '../product-manager.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productManagerService: ProductManagerService) { }

  ngOnInit() {
    this.productManagerService.products$.subscribe(prods => this.products = prods);
  }

  deleteProd(id) {
    this.productManagerService.deleteProduct(id);
  }

}
