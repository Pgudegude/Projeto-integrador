import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public product: any[] = [];

  public productDisplay: any[] = [];

   categoria1 =new Category();
   categoria2 = new Category();
   categoria3 = new Category();
  produto1=new Produtos();
  produto2=new Produtos();
  produto3=new Produtos();
  produto4=new Produtos();
  produto5=new Produtos();
  constructor(public http: HttpService, private router: Router) {
    this.categoria1.id =7;
    this.categoria2.id=8;
    this.categoria3.id=10
    this.produto1.code=65;
    this.produto2.code=49;
    this.produto3.code=48;
    this.produto4.code=41;
    this.produto5.code=52;
    this.produto1.categoria={};
    this.produto2.categoria={};
    this.produto3.categoria={};
    this.produto4.categoria={};
    this.produto5.categoria={};
  }
  
  selecionaCategoria(categoria: Category) {
    this.router.navigate(['listaCategoria', categoria.id])
  }
  // selecionado(produto) {
  //   this.router.navigate(['listaProduto', produto.code])
  //   console.log("eu devia funcionar");
    
  // }
  ngOnInit(): void {

  }

}
