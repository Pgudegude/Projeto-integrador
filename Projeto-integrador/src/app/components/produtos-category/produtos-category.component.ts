import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Category } from '../models/category';
import { ApiCategory } from '../models/apiCategory';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { apiProduct } from '../models/apiProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-category',
  templateUrl: './produtos-category.component.html',
  styleUrls: ['./produtos-category.component.css']
})
export class ProdutosCategoryComponent implements OnInit {

  public category: Category[] = []

  @Output() categoryClicked = new EventEmitter();

  categoryAPI: ApiCategory;
  erro: any;

public product: any = [];
    
public productDisplay: any = [];

apiProduct: apiProduct

  constructor(private service: HttpService,private route: ActivatedRoute,private router: Router ) { 
    this.route.params.subscribe(parameters => {
        console.log(parameters)
      this.service.getCategory(parameters['categoria.id'])
      .subscribe(
        (data) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    })}
   

  

  ngOnInit(): void {
    for(let i = 0; i < this.product.length; i++){
      this.productDisplay.push(this.product[i])
    }
  }
  selecionado(produto) {
    this.router.navigate(['listaProduto', produto.code])
    console.log("eu devia funcionar");
    
  }
}
