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

  public getCategory(code: number){
    return this.http.get(`http://localhost:8080/ecommerce/product-category/${code}`)
  }
}
