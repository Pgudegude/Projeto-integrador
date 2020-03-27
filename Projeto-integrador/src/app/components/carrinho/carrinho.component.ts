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
  cartProduct = [];
  product: object


  preco = 0;
  formularioFrete: FormGroup;
<<<<<<< HEAD


  constructor(private fb: FormBuilder) {
    this.searchProduct()
    for (let i = 0; i < this.cartProduct.length; i++) {
      let cont: number = 1;
      for (let y = 0; y < this.cartProduct.length; y++) {
        if (this.cartProduct[i] === this.cartProduct[y])
          cont++;
        this.cartProduct.splice(y, 1);
      }
      this.product = this.cartProduct[i];
      this.carrinho.push(new Carrinho(this.product, cont))
      console.log(this.carrinho)
    }

    this.carrinho.forEach(item => {
      this.total += item.produto[0].valueProduct * item.quantidade;
    })
=======
  constructor(private fb: FormBuilder, private stock: StockService) {
    this.searchProduct()
  for(let i = 0; i < this.cartProduct.length; i++){
    this.carrinho.push(new Carrinho(this.cartProduct[i]))
  }
  
  this.carrinho.forEach(item =>{
    this.total += item.produto.valueProduct * item.quantidade;
  })
    this.stock.saveCart(this.carrinho)
>>>>>>> 168c68a34fdb6778dcffdcec511225fc9aac006f
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
<<<<<<< HEAD
    this.carrinho.forEach(item => {
      if (item.produto[0].codProduct == produto.produto[0].codProduct)
        item.quantidade = parseInt(this.formularioQuantidade.value.quantidade);
=======
    this.carrinho.forEach(item=>{
      if(item.produto.codProduct == produto.produto.codProduct)
      item.quantidade = parseInt(this.formularioQuantidade.value.quantidade);
>>>>>>> 168c68a34fdb6778dcffdcec511225fc9aac006f
    }
    )
    this.calcularTotal();
    this.mostrandoQuantidade();
<<<<<<< HEAD

=======
    this.stock.saveCart(this.carrinho)
>>>>>>> 168c68a34fdb6778dcffdcec511225fc9aac006f
  }

  excluirProduto(produto) {
    this.carrinho = this.carrinho.filter(item => item.produto != produto)
    this.calcularTotal();
    this.mostrandoQuantidade();
    this.stock.saveCart(this.carrinho)
  }

  searchProduct() {
    let product = JSON.parse(localStorage.getItem("cartProduct"))
    for (let i = 0; i < product.length; i++) {
      this.cartProduct.push(product[i])
    }
    return product == null ? [] : this.cartProduct
  }

}