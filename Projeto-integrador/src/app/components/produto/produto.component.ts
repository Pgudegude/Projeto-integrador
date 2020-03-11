import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Produtos } from '../models/produtos';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

  cont: number = 0;
  @Output() contadorProduto = new EventEmitter() 

  @Input() item:Produtos;
  
  increment (){
    console.log(this.contadorProduto.emit(this.cont++));
  }

  constructor() { }

  ngOnInit() {
  
  }
  
  countItems(){
    
  }

}
