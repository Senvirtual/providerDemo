import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoginService} from './shared/login-service.service';
import {AnotherProductService} from './shared/another-product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /*Factory错误使用例
  providers: [{provide: ProductService,
    useFactory: () => {
    let lom: LoginService;
    const dev = Math.random() > 0.5;
    if (dev) {
      return new ProductService(lom);
    }
    else
    {
      return new AnotherProductService(lom);
    }
    }}, LoginService],*/
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoginService, config) => {
      if (config.isDev) {
        return new ProductService(logger);
      }else {
        return new AnotherProductService(logger);
      }
    }, deps: [LoginService, 'APP_CONFIG']
  }, LoginService, {
    provide: 'APP_CONFIG', useValue: {isDev: false}
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
