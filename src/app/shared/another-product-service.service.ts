import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoginService} from './login-service.service';

@Injectable()
export class AnotherProductService implements ProductService {
  getProduct(): Product {
    this.logger.logging('another的logger');
    return new Product(6080, 'iphone6', 4777, 'smartphone');
  }


  constructor(public logger: LoginService) { }

}
