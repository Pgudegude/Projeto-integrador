import { Component, OnInit } from '@angular/core';
import { ProdutoComponent } from "../produto/produto.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cont: number = 0;
  
  countItems(){
    this.cont ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

    
}
