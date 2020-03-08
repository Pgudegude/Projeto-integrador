import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  rapido: any ;
  normal: any ;
  preco: any = "R$ 46,32";
  total: any = "R$ 46,32";
  qtd: any;   
  formularioQuantidade: FormGroup;
  // @ViewChild('qtd') qtd: HTMLSelectElement;
  
  freteR = () => {
    let quant = this.formularioQuantidade.value.quantidade
    if(this.normal === "20,00"){
      this.normal = ""
      this.rapido = "50,00"
      this.total = ((quant * 46.32) + 50.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }else{
      this.rapido = "50,00"
      this.total = ((quant * 46.32)  + 50.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
      
    }
  }
  
  
  freteN = () => {
    let quant = this.formularioQuantidade.value.quantidade
    if(this.rapido == "50,00"){
      this.rapido = ""
      this.normal = "20,00"
      this.total = ((quant * 46.32)  + 20.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }else{
      this.normal = "20,00"
      this.total = ((quant * 46.32)  + 20.00).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
    }
  }

  calcularTotal(){
    let quant = this.formularioQuantidade.value.quantidade
    if(this.total != ""){
    this.total = this.preco = (46.32 * quant ).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
  }else{
    this.preco = (46.32 * quant ).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
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
    // console.log(document.getElementById('qtd').children[i].textContent);
    this.qtd = (this.formularioQuantidade.value.quantidade)    
    console.log();
    
  }
  
  




}
