import { Component, OnInit, Input, Output } from '@angular/core';
import { Produtos } from '../models/produtos';
import { Router } from '@angular/router';
import { apiProduct } from '../models/apiProduct';
import { ProductService } from 'src/app/service/product.service';
import { Category } from '../models/category';

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
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
    
    public product: Produtos[] = [];
    
    public productDisplay: Produtos[] = [];
    
    apiProduct: apiProduct
    erro: any
    
    constructor(private router: Router,private productService: ProductService) {
      this.getter();
    
    }

    categorySelected(categoria: Category) {
      if(categoria.id != 0){
        this.product = this.productDisplay.filter(produto => produto.categoria == categoria.id)
      }else{
        this.product = this.productDisplay
      }
    }
  
  
  ngOnInit(){
    for(let i = 0; i < this.product.length; i++){
      this.productDisplay.push(this.product[i])
    }
  }
  
  selecionado(produto) {
    this.router.navigate(['/produtos', produto.id])
  }
  
}
