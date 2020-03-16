import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { Carrinho } from '../models/carrinho';

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
  totalComDesconto:string;
  totalComFrete = 0;

  formularioQuantidade: FormGroup;
  formularioFrete:FormGroup;
  carrinho: Carrinho[]=[];

  preco=0;
  constructor(private fb: FormBuilder) {
    this.carrinho.push(
      new Carrinho(new Produtos(1, "Bola 1", 343, 72.30, "Kennedy", 67),1),
      new Carrinho(new Produtos(2, "Bola 2", 343, 72.30, "jonas", 47), 1),
      new Carrinho(new Produtos(3, "Bola 3", 343, 72.30, "fabio", 7), 1),
      new Carrinho(new Produtos(4, "Bola 4", 343, 72.30, "fabio", 67),1),
    )
    this.calcularTotal()
    this.mostrandoQuantidade()
    }

calcularTotal=()=>{
  this.carrinho.forEach(item => {
    this.total += item.produto.preco * item.quantidade;
    if (this.total != 0) {
      this.carrinho.forEach(item=>{
      this.desconto = (this.total*0.7).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      

  })
}})}

  freteR = () => {
     this.totalComFrete = (this.total+this.formularioFrete.value-this.desconto)
     this.frete = this.formularioFrete
     console.log(this.frete)
    }


  freteN = () => {
    this.frete = this.formularioFrete.value
     this.totalComFrete = (this.total+this.formularioFrete.value-this.desconto)
    console.log(this.frete)

  }

  // calcularTotal() {
  //   let quant = this.formularioQuantidade.value.quantidade
  //   if (this.total != 0) {
  //     this.carrinho.forEach(item=>{
  //       this.desconto = (this.total*0.7).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  //       this.totalComDesconto = (this.total+this.formularioFrete.value-(this.desconto)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
       
  //     })
  // }
// }

  frete:any
  quantidade: any[];

  criandoFormulario() {
    this.formularioQuantidade = this.fb.group({
      quantidade: []
    })
    this.formularioFrete = this.fb.group({
        frete:Number
    })
    // 
  }


  ngOnInit(): void {
    this.criandoFormulario();

   
  }

  mostrandoQuantidade() {
   this.qtd=0;
    this.carrinho.forEach(item => {
      this.qtd += item.quantidade;
    })
  }

  ajustarQuantidade(produto){
      this.carrinho.forEach(item => {
        if(item === produto)
        item.quantidade = this.formularioQuantidade.value.quantidade;
      })
      this.calcularTotal();
      this.freteN();

  }
  excluirProduto(produto) {
    this.carrinho = this.carrinho.filter(item => item.produto != produto)
    this.calcularTotal();
    this.mostrandoQuantidade();
  }

}
