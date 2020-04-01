import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor() { }

  saveCart(cart) {
    sessionStorage.setItem("cartProduct", JSON.stringify(cart))
  }

  recoverCart() {
    return JSON.parse(sessionStorage.getItem("cartProduct"))
  }

  removeCart() {
    sessionStorage.removeItem("cartProduct")
  }

}
