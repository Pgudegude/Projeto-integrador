import { Component, OnInit, Input, Output } from '@angular/core';
import { Produtos } from '../models/produtos';
// import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  public produtos: Produtos[] = [];

  public produtosExibidos: Produtos[] = [];

  @Input() items:Produtos;

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
  }

  ngOnInit(): void {
  }

}
