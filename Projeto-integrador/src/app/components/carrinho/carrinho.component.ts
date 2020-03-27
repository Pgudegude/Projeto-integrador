import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { Carrinho } from '../models/carrinho';
import { StockService } from 'src/app/service/stock.service';



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
  formularioFrete: FormGroup;
  constructor(private fb: FormBuilder, private stock: StockService) {
    this.searchProduct()
  for(let i = 0; i < this.cartProduct.length; i++){
    this.carrinho.push(new Carrinho(this.cartProduct[i]))
  }
  
  this.carrinho.forEach(item =>{
    this.total += item.produto.valueProduct * item.quantidade;
  })
    this.stock.saveCart(this.carrinho)
    this.calcularTotal()
    this.mostrandoQuantidade()
  }

  calcularTotal = () => {
    this.total = 0
    this.carrinho.forEach(item => {
      this.total += item.produto.valueProduct * item.quantidade;
      if (this.total != 0) {
        this.carrinho.forEach(item => {
          this.desconto = (this.total * 0.7)
        })
      }
    })
    this.totalComDesconto = (this.total - (this.total * 0.7))
    return this.totalComDesconto
  }

  freteR = () => {
    this.frete = (50)
    this.totalComDesconto = (this.total - (this.total * 0.7) + 50)
    return 50
  }
  freteN = () => {
    this.frete = (20)
    this.totalComDesconto = (this.total - (this.total * 0.7) + 20)
    return 20
  }



  frete: any
  quantidade: number;

  criandoFormulario() {
    this.formularioQuantidade = this.fb.group({
      quantidade: []
    })
    this.formularioFrete = this.fb.group({
      frete: []
    })
    
  }

  ngOnInit(): void {
    this.criandoFormulario();
  }



  mostrandoQuantidade() {
    this.qtd = 0;
    this.carrinho.forEach(item => {
      this.qtd += item.quantidade;
    })
  }

  ajustarQuantidade(produto) {
    this.carrinho.forEach(item=>{
      if(item.produto.codProduct == produto.produto.codProduct)
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
  }

  searchProduct (){
    let product = JSON.parse(localStorage.getItem("cartProduct"))
    for(let i = 0; i < product.length; i++){
      this.cartProduct.push(product[i])
    }
    return product == null ? [] : this.cartProduct
  }

}