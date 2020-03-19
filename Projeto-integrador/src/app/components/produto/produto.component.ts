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

  // listaProdutos = localStorage.getItem('listaProdutos') ? JSON.parse(localStorage.getItem('listaProdutos')) : []

  product: apiProduct;
  code: number
  // salvarLocaStorage = salvarProdutos => {
  //   let converterJson = JSON.stringify(salvarProdutos)
  //   localStorage.setItem('ListaProdutos', converterJson)
  //   console.log("Lista de Produtos salva com sucesso!");
  // }

  constructor(private route: ActivatedRoute, public service: ProductService) { 
  
  }

  ngOnInit(): void{
  this.route.params.subscribe(parameters => {
    this.service.findByProductsCode(parameters['code'])
    .subscribe((product: apiProduct)=>{
this.code = parameters['code'];
this.product = product;
console.log(product);

    })
  })
  }
}
