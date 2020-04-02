import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`/api/ecommerce/find-product`)
  }

  public findByProductsCode(code: number) {
    return this.http.get(`/api/ecommerce/product-id/${code}`)
  }
 
}
