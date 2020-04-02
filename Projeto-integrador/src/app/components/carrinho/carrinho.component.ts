import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { Carrinho } from '../models/carrinho';
import { StockService } from 'src/app/service/stock.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {
  
  @Input() item: Produtos;
  
  desconto: any;
  rapido: any;
  normal: any;
  total = 0;
  qtd = 0;
  totalComDesconto: any;
  formularioQuantidade: FormGroup;
  carrinho: Carrinho[] = [];
  cartProduct = []

  preco = 0;
  // formularioFrete: FormGroup;  
  constructor(private fb: FormBuilder, private stock: StockService, private router: Router) {
    this.criandoFormulario();
    this.searchProduct()
    this.carrinho = this.stock.recoverCart()
    
      this.carrinho.forEach(item => {
        this.total += item.produto.valueProduct * item.quantidade
        this.total
      })
    this.calcularTotal()
    this.mostrandoQuantidade()  
  }

  calcularTotal = () => {
    this.total = 0
    this.carrinho.forEach(item => {
      this.total += item.produto.valueProduct * item.quantidade;
      if (this.total != 0) {
        
          this.desconto = (this.total * 0.7)
      }
    })
    this.totalComDesconto = (this.total - (this.total * 0.7))
    this.stock.saveCart(this.carrinho)
    return this.totalComDesconto
  }

  freteR = () => {
    this.frete = (50)
    this.frete = this.frete
    this.totalComDesconto = (this.total - (this.total * 0.7) + 50)
    return this.frete
  }

  freteN = () => {
    this.frete = (20)
    this.frete = this.frete
    this.totalComDesconto = (this.total - (this.total * 0.7) + 20)
    return this.frete
  } 

  frete: any
  quantidade: number;

  criandoFormulario() {
    this.formularioQuantidade = this.fb.group({
      quantidade: []
    })
    }

  
  searchProduct() {
    let product = JSON.parse(sessionStorage.getItem("cartProduct"))
    for (let i = 0; i < product.length; i++) {
      this.cartProduct.push(product[i])
    }
    return product == null ? [] : this.cartProduct
  }

  ngOnInit(): void {
  }



  mostrandoQuantidade() {
    this.qtd = 0;
    this.carrinho.forEach(item => {
      this.qtd += item.quantidade;
    })
  }


  ajustarQuantidade(produto) {
    this.carrinho.forEach(item => {
      if (item.produto.codProduct == produto.produto.codProduct)
        item.quantidade = parseInt(this.formularioQuantidade.value.quantidade);
    }
    )
    this.calcularTotal();
    this.mostrandoQuantidade();
    this.stock.saveCart(this.carrinho)
  }

  excluirProduto(produto) {
    this.carrinho = this.carrinho.filter(item => item.produto != produto)
    this.calcularTotal();
    this.mostrandoQuantidade();
    this.stock.saveCart(this.carrinho)
    this.verificarCarrinho() 
  }

  verificarCarrinho() {
    this.carrinho = this.stock.recoverCart()
    if (this.carrinho == null || this.carrinho.length <= 0) {
      alert("Carrinho está vazio!")
      this.router.navigate(["home"])
    }
  }

}