import { Component } from '@angular/core';


interface Pedido {
  data: string;
  pedido: string;
  valor: number;
  statusPagamento: string;
  statusPedido: string;
}


const ped: Pedido[] = [
  {
    data: '13/03/2020',
    pedido: '#1235678',
    valor: 8001.00,
    statusPagamento: 'aprovado',
    statusPedido: 'enviado'
  },
  {
    data: '31/01/2020',
    pedido: '123221',
    valor: 300.00,
    statusPagamento: 'aprovado',
    statusPedido: 'entregue',
  },
  {
    data: '02/12/2019',
    pedido: '31992',  
    valor: 72.00,
    statusPagamento: 'recusado',
    statusPedido: 'cancelado'
  }
];

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent {
 
  pedido = ped;

}





