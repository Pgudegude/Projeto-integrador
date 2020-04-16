import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../models/Pedido';
import { StockService } from 'src/app/service/stock.service';
import { Router } from '@angular/router';
import { Carrinho } from '../models/carrinho';
import { apiProduct } from '../models/apiProduct';
import { StatusPedido } from '../models/StatusPedido';


@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  constructor(private http: PedidoService, private stock: StockService, private router: Router) {
  }
  login: boolean
  ped: StatusPedido[] = []
  carregar: boolean
  vazio = []
  usuario: any
  detalhe: any
  refazer: any
  
  pedido:Pedido[] =[]

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
      data.forEach(d =>{
        this.ped.push(new StatusPedido(d,d.statusRequest.length-1))
        this.pedido.push(d)
      }
      )
      console.log(this.ped)
    })
    if (this.ped) {
      this.carregar = true;
    }
    else { this.carregar = false }
    return this.ped
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

    return (this.posicao = this.pedido.indexOf(pedido)), console.log(this.posicao)
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




