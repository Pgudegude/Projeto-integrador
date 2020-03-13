import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Produtos } from '../models/produtos';
import { ROUTES } from '../../app-routing.module';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  desconto: any = "70%"
  rapido: any ;
  normal: any ;
  preco: any = "R$ 75,42";
  total: any = "R$ 46,32";
  qtd: any;   
  totalDesconto: any;
  
  formularioQuantidade: FormGroup;
  
  public produtos: Produtos[] = [];
  
  @Input() items:Produtos;
  
  
  freteR = () => {
    let quant = this.formularioQuantidade.value.quantidade
    this.total = ((75.42 * quant )-(29.10 * quant))
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
    this.total = ((75.42 * quant )-(29.10 * quant))
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
      this.total = this.preco = (75.42 * quant ).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      this.desconto = (0.7 * 75.42 * quant).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      this.totalDesconto = ((75.42 * quant )-(0.7 * 75.42 * quant)).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }
  }
  
  constructor(private fb: FormBuilder) { }
  
  
  quantidade: any[];
  criandoFormulario(){
    this.formularioQuantidade = this.fb.group({
      quantidade:[]
    })
  }
  
  ngOnInit(): void {
    this.criandoFormulario();
  }
  
  mostrandoQuantidade(){
    this.qtd = (this.formularioQuantidade.value.quantidade)    
  }
  
    removerProduto(){
      
      
    }
      
}
