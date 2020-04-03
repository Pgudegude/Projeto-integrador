import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../models/Pedido';
import { ignoreElements } from 'rxjs/operators';

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
  usuario:any
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
    if(this.pedido){
      this.carregar=true;
    }
    else
    {this.carregar=false}
    console.log(this.pedido)
    return this.pedido
  }

  ngOnInit(): void {
    this.verificarLogin()
    this.mostrarPedidos()
  }
}




