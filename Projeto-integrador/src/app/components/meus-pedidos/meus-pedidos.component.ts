import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  constructor(private http: PedidoService) { }
  login: boolean
  pedido: Pedido[] = []
  carregar:boolean
  vazio =[]
  verificarLogin() {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    if (usuario == null) {
      this.login = false
      console.log("usuário não logado")
    }
    else {
    this.login = true
    if(this.mostrarPedidos()!=this.vazio){
      this.carregar=true
      console.log(this.pedido)
    }
    else{
      this.carregar=false
    }
    }
  }
  mostrarPedidos() {
    this.http.acompanhar().subscribe(data => {  
      data.forEach(d =>
        this.pedido.push(d)
      )
      console.log(data)
    })
    return this.pedido
  }

  ngOnInit(): void {
    this.verificarLogin()
  }
}




