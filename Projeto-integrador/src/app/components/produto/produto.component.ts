import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { apiProduct } from '../models/apiProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Carrinho } from '../models/carrinho';
import { StockService } from 'src/app/service/stock.service';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  
  localProduct: apiProduct[] = []
  product: apiProduct;
  code: number
  carrinho: Carrinho[] = [];


  constructor(private route: ActivatedRoute, public service: ProductService, private stock: StockService) {
    this.route.params.subscribe(parameters => {
      console.log(parameters)
      this.service.findByProductsCode(parameters['code'])
        .subscribe((product: apiProduct) => {
          this.code = parameters['code'];
          this.product = product[0];
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
        if (product[i].codProduct == this.product.codProduct)
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
