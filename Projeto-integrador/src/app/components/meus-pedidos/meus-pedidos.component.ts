import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';

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
export class MeusPedidosComponent implements OnInit{


  constructor(private http:PedidoService) { }
login:boolean
  pedido = ped;


verificarLogin(){
 let usuario =  JSON.parse(localStorage.getItem("usuario"))
if(usuario==null){
  this.login=false
  console.log("usuário não logado")
}
else{this.login=true
console.log(usuario)}
}
pedi:[]


mostrarPedidos(){
  this.http.acompanhar().subscribe()
  
  
}
  ngOnInit(): void {
    this.verificarLogin()
    
  }
  
}




