  
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`http://localhost:8080/ecommerce/find-product`)
  }

  public findByProductsCode(code: number) {
    return this.http.get(`http://localhost:8080/ecommerce/product-id/${code}`)
  }

  public getProductsOrderByAZ() {
    return this.http.get(`http://localhost:8080/ecommerce/product-orderName`)
  }
  
  public getProductsOrderByZA() {
    return this.http.get(`http://localhost:8080/ecommerce/product-orderNameDesc`)
  }
  
  public getProductsOrderByValue() {
    return this.http.get(`http://localhost:8080/ecommerce/product-orderPrice`)
  }
  
  public getProductsOrderByValueDesc() {
    return this.http.get(`http://localhost:8080/ecommerce/product-orderPriceDesc`)
  }
 
}
