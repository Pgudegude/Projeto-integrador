import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Produtos } from '../models/produtos';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  
  public items:Produtos[] = [
    new Produtos("Bola diamante", 1, 99.99, "Desc",66),
    new Produtos("Bola uiverso", 4, 49.99, "Desc",66),
    new Produtos("Bola Espiral", 1, 59.99, "Desc",66),
    new Produtos("Bola Mike Cong", 9, 979.99, "Desc",66),
    new Produtos("Bola Esfera do dragao", 8, 476.99, "Desc",66),
    new Produtos("Bola Splinter", 3, 98.62, "Desc",66),
    new Produtos("Bola Donatello", 3, 9.99, "Desc",66),
    new Produtos("Bola Universo3", 9, 12.99, "Desc",66),
    new Produtos("Bola Psicodelica",123, 56.32, "Desc",66),
    new Produtos("Bola Prata", 3, 74.63, "Desc",66)
  ]

  cont: number = 0;
  @Output() contadorProduto = new EventEmitter() 

  
  increment (){
    console.log(this.contadorProduto.emit(this.cont++));
  }

  constructor() { }

  ngOnInit() {
  
  }
  
  countItems(){
    
  }

}
