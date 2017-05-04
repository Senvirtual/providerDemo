import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product-service.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // 在组件内声明注入器
  // providers: [{provide: ProductService, useClass: AnotherProductService}]
})
export class Product2Component implements OnInit {

  product: Product;
  constructor(private  productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
