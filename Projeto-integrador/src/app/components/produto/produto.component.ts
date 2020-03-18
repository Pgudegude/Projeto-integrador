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

  public productCode;
  productDisplay: apiProduct

  // salvarLocaStorage = salvarProdutos => {
  //   let converterJson = JSON.stringify(salvarProdutos)
  //   localStorage.setItem('ListaProdutos', converterJson)
  //   console.log("Lista de Produtos salva com sucesso!");
  // }

  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit(): void {
    this.productCode = parseInt(this.route.snapshot.paramMap.get('code'));
this.service.findByProductsCode(this.productCode).subscribe(
  product => this.productDisplay = product
)

  }

}
