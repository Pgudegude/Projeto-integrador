import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Category } from '../models/category';
import { ApiCategory } from '../models/apiCategory';
import { ProductService } from 'src/app/service/product.service';

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

  getter(){
this.service.getCategory().subscribe(
  (data: ApiCategory) => {
    this.categoryAPI = data;
  },(error: any) => {
    console.log("ERROR",error);
    
  }
)
  }

  constructor(private service: ProductService) { 
    this.getter()
  }

  ngOnInit(): void {
  }

}
