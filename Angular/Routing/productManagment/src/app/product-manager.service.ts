import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';
import { element } from 'protractor';


@Injectable()
export class ProductManagerService {

  products$: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  productList(): BehaviorSubject<Product[]> {
    return this.products$;
  }

  createProduct(product): void {
    const tempProds = this.products$.getValue();
    tempProds.push(product);
    console.log('creating in the service: ', tempProds);
    this.products$.next(tempProds);
  }

  deleteProduct(id) {
    console.log('now deleting product in service: ', id);
    let tempProds = this.products$.getValue();
    tempProds = tempProds.filter(prod => prod.id !== id);
    this.products$.next(tempProds);
  }

}
