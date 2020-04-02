import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-compra-finalizada',
  templateUrl: './compra-finalizada.component.html',
  styleUrls: ['./compra-finalizada.component.css']
})
export class CompraFinalizadaComponent implements OnInit {

pedido = JSON.parse(sessionStorage.getItem('pedido'))
frete:string
verificar(){
if(this.pedido.frete==20){
  this.frete="Normal"
}
else{this.frete="Rapido"}
}
  constructor() {
    console.log(this.pedido) 
  }

  ngOnInit(): void {
    this.verificar()
  }

}
