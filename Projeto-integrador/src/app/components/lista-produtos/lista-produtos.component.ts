import { Component, OnInit, Input, Output } from '@angular/core';
import { Produtos } from '../models/produtos';
import { Router } from '@angular/router';
import { apiProduct } from '../models/apiProduct';
import { ProductService } from 'src/app/service/product.service';
import { ApiCategory } from '../models/apiCategory';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  
  getter() {
    this.productService.getProducts().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
    
    public product: any = [];
    
    public productDisplay: any = [];
    
    apiProduct: apiProduct
    erro: any
    
    constructor(private router: Router,private productService: ProductService) {
      this.getter();
    
    }
  
  ngOnInit(){
    for(let i = 0; i < this.product.length; i++){
      this.productDisplay.push(this.product[i])
    }
  }
  
  selecionado(produto) {
    this.router.navigate(['listaProduto', produto.code])
    console.log("eu devia funcionar");
    
  }
  
}
