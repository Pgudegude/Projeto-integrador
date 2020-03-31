import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-compra-finalizada',
  templateUrl: './compra-finalizada.component.html',
  styleUrls: ['./compra-finalizada.component.css']
})
export class CompraFinalizadaComponent implements OnInit {

  constructor(private stock: StockService) { 
  }

  clearCart(){
   this.stock.removeCart()
  }
  ngOnInit(): void {
  }

}
