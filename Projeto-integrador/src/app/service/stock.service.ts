import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor() { }

  saveCart(cart) {
    localStorage.setItem("cartProduct", JSON.stringify(cart))
  }

  recoverCart() {
    return JSON.parse(localStorage.getItem("cartProduct"))
  }

  removeCart() {
    localStorage.removeItem("cartProduct")
  }

}
