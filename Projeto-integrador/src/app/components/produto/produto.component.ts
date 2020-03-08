import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  cont: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  countItems(){
    this.cont ++;
  }

}
