import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { apiProduct } from '../models/apiProduct';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})

export class ListaProdutosComponent implements OnInit {
  formularioDeOrdem:FormGroup
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
    
    constructor(private router: Router,private productService: ProductService, private fb: FormBuilder) {
      this.getter();
    }
  
alterar(){
  if(this.formularioDeOrdem.value.ordenacao==1){
    this.productService.getProductsOrderByValueDesc().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
  else  if(this.formularioDeOrdem.value.ordenacao==2){
    this.productService.getProductsOrderByValue().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
  
  else  if(this.formularioDeOrdem.value.ordenacao==3){
    
    this.productService.getProductsOrderByAZ().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
  else  if(this.formularioDeOrdem.value.ordenacao==4){
    this.productService.getProductsOrderByZA().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
    else if(this.formularioDeOrdem.value.ordenacao==5){
      let intermedioProduct:any[]=[]
      this.productService.getProductsMaisVendidos().subscribe(
        (data:any[]) => {
          data.forEach(data=>{
            intermedioProduct.push(data[1])
          })
          this.product=intermedioProduct;
          this.productDisplay = this.product
        }, (error: any) => {
          console.error("ERROR", error)
        })
      
    }
}
  ngOnInit(){
    for(let i = 0; i < this.product.length; i++){
      this.productDisplay.push(this.product[i])
    }
    this.formularioDeOrdem = this.fb.group({
      ordenacao:[""]
    })
  }
  
  selecionado(produto) {
    this.router.navigate(['listaProduto', produto.code])
  }
  

}
