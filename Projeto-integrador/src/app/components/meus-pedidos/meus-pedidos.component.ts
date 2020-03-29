import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../models/Pedido';

// interface Pedido {
//   data: string;
//   pedido: string;
//   valor: number;
//   statusPagamento: string;
//   statusPedido: string;
// }


// let ped: Pedido[] = [
//   {
//     date: '2020-12-03',
//     id: '#1235678',
//     price: 8001.00,
//     payment: 'aprovado',
//     statusRequest: 'enviado'
//   },
//   {
//     data: '31/01/2020',
//     pedido: '123221',
//     valor: 300.00,
//     statusPagamento: 'aprovado',  
//     statusPedido: 'entregue',
//   },
//   {
//     data: '02/12/2019',
//     pedido: '31992',
//     valor: 72.00,
//     statusPagamento: 'recusado',
//     statusPedido: 'cancelado'
//   }
// ];
@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {


  constructor(private http: PedidoService) { }
  login: boolean
  pedido: Pedido[] = []
  verificarLogin() {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    if (usuario == null) {
      this.login = false
      console.log("usuário não logado")
    }
    else {
    this.login = true
      this.mostrarPedidos()
      console.log(usuario)
    }
  }


  mostrarPedidos() {
    this.http.acompanhar().subscribe(data => {  
      data.forEach(d =>
        this.pedido.push(d)
      )
    })
    return this.pedido, console.log(this.pedido)

  }
  ngOnInit(): void {
    this.verificarLogin()

  }

}




