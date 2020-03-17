import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Produtos } from '../models/produtos';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

  listaProdutos = localStorage.getItem('listaProdutos') ? JSON.parse(localStorage.getItem('listaProdutos')) : []


  salvarLocaStorage = salvarProdutos => {
    let converterJson = JSON.stringify(salvarProdutos)
    localStorage.setItem('ListaProdutos', converterJson)
    console.log("Lista de Produtos salva com sucesso!");
  }

  // cont: number = 0;
  // @Output() contadorProduto = new EventEmitter() 


  // increment (){
  //   console.log(this.contadorProduto.emit(this.cont++));
  // }

  constructor() { }

  ngOnInit() {

  }

  // countItems(){

  // }

}
