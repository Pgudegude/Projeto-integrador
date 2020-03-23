import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { apiProduct } from '../models/apiProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

  localProduct: apiProduct[] = []
  product: apiProduct;
  code: number


  constructor(private route: ActivatedRoute, public service: ProductService) {
    this.route.params.subscribe(parameters => {
      console.log(parameters)
      this.service.findByProductsCode(parameters['code'])
        .subscribe((product: apiProduct) => {
          this.code = parameters['code'];
          this.product = product;
        })
    })
  }

  ngOnInit(): void {
    let storageProduct = JSON.parse(localStorage.getItem('cartProduct'))
    if (storageProduct != null) {
      for (let i = 0; i < storageProduct.length; i++) {
        if (storageProduct != null) {
          this.localProduct.push(storageProduct[i])
        }
      }
    }
  }

  saveProduct() {
    let count = 0
    let product: apiProduct[] = JSON.parse(localStorage.getItem("cartProduct"))
    if (product != null) {
      for (let i = 0; i < product.length; i++) {
        if (product[i].name == this.product.name)
          count++
      }
    }
    if (count == 0) {
      this.localProduct.push(this.product)
      let produto_json = JSON.stringify(this.localProduct)
      localStorage.setItem("cartProduct", produto_json)
    }
  }


}
