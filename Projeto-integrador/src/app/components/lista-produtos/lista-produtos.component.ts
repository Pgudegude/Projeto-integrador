import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  public items:Produtos[] = [new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc"),
  new Produtos("Sheila Meusacco", 1, 99999.99, "Desc")
]
  constructor() { }

  ngOnInit(): void {
  }

}
