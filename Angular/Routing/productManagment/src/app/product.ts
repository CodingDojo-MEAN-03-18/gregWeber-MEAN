import { identifierModuleUrl } from "@angular/compiler";

export class Product {

  constructor(
    public id = Math.floor(Math.random() * 1000),
    public title = '',
    public price = 0,
    // public imgUrl = '',
  ) { }
}

