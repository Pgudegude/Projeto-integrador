import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { Carrinho } from '../models/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  @Input() item:Produtos;
  
  desconto: any = "70%"
  rapido: any ;
  normal: any ;
  total: any = "R$ 46,32";
  qtd: any;   
  totalDesconto: any;
  totalFrete: any;
  
  formularioQuantidade: FormGroup ;
  
  carrinho: Carrinho[]=[];
  
  constructor( private fb: FormBuilder) { 
    this.carrinho.push(
      new Carrinho(new Produtos(1,"Bola 1",343,72.30,"Kennedy",67),5),
      new Carrinho(new Produtos(2,"Bola 2",343,70.30,"jonas",47),6),
      new Carrinho(new Produtos(3,"Bola 3",343,2.30,"fabio",7),8),
      new Carrinho(new Produtos(4,"Bola 4",343,724.30,"fabio",67),8),
      )
      this.carrinho.forEach(item =>{
        this.total += item.produto.preco * item.quantidade;
      })
    }
    
    freteR = () => {
      let quant = this.formularioQuantidade.value.quantidade
      this.total = ((this.item.preco * quant )-(0.7 * this.item.preco * quant))
      if(this.normal === "20,00"){
        this.normal = ""
        this.rapido = "50,00"
        this.totalDesconto = (this.total + 50.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      }else{
        this.rapido = "50,00"
        this.totalDesconto = (this.total  + 50.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }
  }
  
  freteN = () => {
    let quant = this.formularioQuantidade.value.quantidade
    this.total = ((this.item.preco * quant )-(0.7 * this.item.preco * quant))
    if(this.rapido === "50,00"){
      this.rapido = ""
      this.normal = "20,00"
      this.totalDesconto = (this.total  + 20.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }else{
      this.normal = "20,00"
      this.totalDesconto = (this.total  + 20.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }
  }
  
  calcularTotal(){
    let quant = this.formularioQuantidade.value.quantidade
    if(this.total != ""){
      this.total = (this.item.preco * quant ).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      this.desconto = (0.7 * this.item.preco * quant).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      this.totalDesconto = ((this.total )-(0.7 * this.item.preco * quant)).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }
  }
  
  quantidade: any[];
  criandoFormulario(){
    this.formularioQuantidade = this.fb.group({
      quantidade:[]
    })
  }
  
  ngOnInit(): void {
    this.criandoFormulario();
    for (let index = 0; index < this.carrinho.length; index++) {
      console.log(this.carrinho[index].produto.preco);
    }
  }
  
  mostrandoQuantidade(){
    this.qtd = (this.formularioQuantidade.value.quantidade)  
  
  }

  excluirProduto(produto){
    this.carrinho = this.carrinho.filter(item => item.produto != produto)
    
  }     
}