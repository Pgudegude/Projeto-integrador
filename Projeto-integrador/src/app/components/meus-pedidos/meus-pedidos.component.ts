import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../models/Pedido';
import { StockService } from 'src/app/service/stock.service';
import { Router } from '@angular/router';
import { Carrinho } from '../models/carrinho';
import { apiProduct } from '../models/apiProduct';


@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  constructor(private http: PedidoService, private stock: StockService, private router: Router) {
  }
  login: boolean
  pedido: Pedido[] = []
  carregar: boolean
  vazio = []
  usuario: any
  detalhe: any
  refazer: any

  verificarLogin() {
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
  }

  mostrarPedidos() {
    this.http.acompanhar().subscribe(data => {
      data.forEach(d =>
        this.pedido.push(d)
      )
    })
    if (this.pedido) {
      this.carregar = true;
    }
    else { this.carregar = false }
    return this.pedido
  }

  ngOnInit(): void {
    this.verificarLogin()
    this.mostrarPedidos()
  }


  posicao: any
  details(item, pedido) {
    this.http.details(item).subscribe(data => {
      this.detalhe = data
      return this.detalhe;
    })

    return (this.posicao = this.pedido.indexOf(pedido))
  }

  remake(item) {
    this.http.details(item).subscribe(data => {
      this.refazer = data.map(
        elem =>
          new Carrinho(new apiProduct(
            elem.codProduct.codProduct,
            elem.codProduct.description,
            elem.codProduct.name,
            elem.codProduct.image,
            elem.codProduct.category,
            elem.codProduct.valueProduct,
            elem.codProduct.valueDiscount,
            elem.codProduct.brand,
            elem.codProduct.model),
            elem.amount)
      )
      this.stock.saveCart(this.refazer)
      this.router.navigate(["/carrinho"])
    })
  }

}




