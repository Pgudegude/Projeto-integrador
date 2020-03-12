import { Component, OnInit, Input, Output } from '@angular/core';
import { Produtos } from '../models/produtos';
import { EventEmitter } from 'protractor';
// import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  // public produtos: Produtos[] = [];
  passarDados: EventEmitter;


  // public produtosExibidos: Produtos[] = [];

  public items:Produtos[] = [
    new Produtos("Bola diamante", 1, 99.99, "Desc",66),
    new Produtos("Bola uiverso", 4, 49.99, "Desc",66),
    new Produtos("Bola Espiral", 1, 59.99, "Desc",66),
    new Produtos("Bola Mike Cong", 9, 979.99, "Desc",66),
    new Produtos("Bola Esfera do dragao", 8, 476.99, "Desc",66),
    new Produtos("Bola Splinter", 3, 98.62, "Desc",66),
    new Produtos("Bola Donatello", 3, 9.99, "Desc",66),
    new Produtos("Bola Universo3", 9, 12.99, "Desc",66),
    new Produtos("Bola Psicodelica",123, 56.32, "Desc",66),
    new Produtos("Bola Prata", 3, 74.63, "Desc",66)
  ]


  // listaDoGrupo(id: number) {
    
  //   return id !== 0 ? this.produtosExibidos = this.produtos.filter(produto => produto.categoria == id) : this.produtosExibidos = this.produtos
    
  // }
  // private http: HttpService
  constructor() { 
  //   this.http.getProdutos().subscribe(
  //     data => {
  //       data.forEach(d => this.produtos.push(new Produtos(d.nome,d.code,d.preco,d.desc,d.categoria)))
  //       this.produtosExibidos = data
  //     }
  //   )

    // this.passarDados.emit(this.items);
  }

  ngOnInit(): void {
  }

}
