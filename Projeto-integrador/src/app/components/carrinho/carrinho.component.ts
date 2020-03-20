import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { Carrinho } from '../models/carrinho';

interface ItensCart {
  value: number
  viewValue: number
}



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
  qtd = null;
  totalComDesconto: any;
  totalComFrete: any;

  formularioQuantidade: FormGroup;
  formularioFrete: FormGroup;
  carrinho: Carrinho[] = [];

  itensCart: ItensCart[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },
    { value: 6, viewValue: 6 },
    { value: 7, viewValue: 7 },
    { value: 8, viewValue: 8 },
    { value: 9, viewValue: 9 },
    { value: 10, viewValue: 10 }
  ]


  preco = 0;
  constructor(private fb: FormBuilder) {
    this.carrinho.push(
      new Carrinho(new Produtos(1, "Bola Diamante", 3, 2.0, "Kennedy", 67), 1),

    )
    this.calcularTotal()
    this.mostrandoQuantidade()


  }

  calcularTotal = () => {
    this.carrinho.forEach(item => {
      this.total += item.produto.preco * item.quantidade;
      if (this.total != 0) {
        this.carrinho.forEach(item => {
          this.desconto = (this.total * 0.7).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        })
      }
    })
    this.totalComDesconto = (this.total - (this.total * 0.7)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(this.totalComDesconto);
  }

  freteR = () => {
    this.frete = (50).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    if (this.frete) {
      this.totalComFrete = (this.total - (this.total * 0.7) + 50).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
  }

  freteN = () => {
    this.frete = (20).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    if (this.frete) {

      this.totalComFrete = (this.total - (this.total * 0.7) + 20).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
  }

  frete: any
  quantidade: any[];

  criandoFormulario() {
    this.formularioQuantidade = this.fb.group({
      quantidade: []
    })
    this.formularioFrete = this.fb.group({
      frete: Number
    })
    // 
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
    this.carrinho.forEach(item => {
      if (item === produto)
        item.quantidade = this.formularioQuantidade.value.quantidade;
      this.calcularTotal();
    }) 


  }

  excluirProduto(produto) {
    this.carrinho = this.carrinho.filter(item => item.produto != produto)

    this.mostrandoQuantidade();
    this.diminuir();
  }

  diminuir = () => {
    this.carrinho.forEach(item => {
      this.total -= item.produto.preco - item.quantidade;
      if (this.total != 0) {
        this.carrinho.forEach(item => {
          this.desconto = (this.total * 0.7).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        })
      }
    })
    this.totalComDesconto = (this.total - (this.total * 0.7)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(this.totalComDesconto);
  }
}