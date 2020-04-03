import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { StockService } from 'src/app/service/stock.service';
import { Carrinho } from '../models/carrinho';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  
  logar: boolean = true;
  carrinho: Carrinho[] = [];
  usuario: any

  constructor(private http: HttpService, private router: Router,private stock: StockService,private emissor : EmissorDeEventosService) {
      this.emissor.emissor.subscribe(()=>{this.verificarLogin()})

   }


  verificarLogin() {
    if (sessionStorage.getItem("usuario") != null) {
    this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.logar = false  
    }
    else{
      this.logar = true
      console.log("usuário não logado")
    }
}


  ngOnInit(): void {
    this.verificarLogin()
  }


  verificarCarrinho() {
    this.carrinho = this.stock.recoverCart()
    if (this.carrinho == null || this.carrinho.length <= 0) {
      return alert("Carrinho está vazio")
    }else{
      this.router.navigate(["/carrinho"])
    }
  }


}
