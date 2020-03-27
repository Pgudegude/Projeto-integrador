import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public product: any[] = [];

  public productDisplay: any[] = [];

  categoria1 = new Category();
  categoria2 = new Category();
  categoria3 = new Category();

  constructor(public http: HttpService, private router: Router) {
    this.categoria1.id = 7;
    this.categoria2.id = 8;
    this.categoria3.id = 10
  }
  selecionaCategoria(categoria: Category) {
    this.router.navigate(['listaCategoria', categoria.id])

  }
  ngOnInit(): void {

  }

}
