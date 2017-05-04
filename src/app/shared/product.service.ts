import { Injectable } from '@angular/core';
import {LoginService} from './login-service.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoginService) { }
  getProduct(): Product {
    this.logger.logging('product的logger');
    return new Product(8080, 'iphone7', 5777, 'smartphone');
  }

}
export class Product {
   constructor(
     public id: number,
     public title: string,
     public price: number,
     public desc: string
   ) {

   }
}
