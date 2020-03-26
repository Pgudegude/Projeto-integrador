import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Endereco } from '../models/Endereco';
import { Validacoes } from '../models/Validacoes';
import { Compra } from '../models/Compra';
import { Carrinho } from '../models/carrinho';
import { StockService } from 'src/app/service/stock.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  cartProduct = []
  frete: any
  carrinho: Carrinho[] = [];
  desconto: any;
  rapido: any;
  normal: any;
  total = 0;
  qtd = 0;
  totalComDesconto: any;
  formularioCheckout: FormGroup;
  formularioQuantidade: any;
  totalComFrete: any;

  constructor(private http: HttpService, private fb: FormBuilder,private recuperar: StockService) {
    this.formularioCheckout = this.enviarDaDosCompra(new Compra)
    this.carrinho  = recuperar.recoverCart();
    this.calcularTotal();
    this.mostrandoQuantidade();
    this.freteR();
    this.freteN();
  }
  
  endereco: Endereco = new Endereco("", "", "", "", "", "", "", "")
  
  capturarCEP() {
    this.http.getCep(this.formularioCheckout.value).subscribe((data) => {
      this.endereco.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.uf)
      this.formularioCheckout.controls['endereco'].patchValue(this.endereco.endereco);
      this.formularioCheckout.controls['bairro'].patchValue(this.endereco.bairro);
      this.formularioCheckout.controls['estado'].patchValue(this.endereco.estado);
      this.formularioCheckout.controls['cidade'].patchValue(this.endereco.cidade);
    })
  }

  ngOnInit(): void {
    this.criarDadosCompra();
  }

  enviarDaDosCompra(comprador: Compra) {
    return new FormGroup({
      nomeCompleto: new FormControl(comprador.nomeCompleto),
      dataDeNascimento: new FormControl(comprador.dataDeNascimento),
      telefone: new FormControl(comprador.telefone),
      cep: new FormControl(comprador.cep),
      endereco: new FormControl(comprador.endereco),
      cidade: new FormControl(comprador.cidade),
      bairro: new FormControl(comprador.bairro),
      complemento: new FormControl(comprador.complemento),
      estado: new FormControl(comprador.estado),
      nomeTitular: new FormControl(comprador.nomeTitular),
      cpf: new FormControl(comprador.cpfTitular),
      dataValidade: new FormControl(comprador.dataValidade),
      cvv: new FormControl(comprador.CVV),
      numeroCartao: new FormControl(comprador.numeroCartao)
    })
  }

  enviarDadosCompra() {
    this.formularioCheckout.reset();
  }

  criarDadosCompra() {
    this.formularioCheckout = this.fb.group({
      nomeCompleto: [
        '',
        Validators.compose([
          Validators.required, // coloquei como obrigatorio
          Validators.maxLength(100) // limitei o maximo de caractere 
        ])],
      telefone: ["",
        Validators.compose([
          Validators.required
        ])],
      cep: ["",
        Validators.compose([
          Validators.required
        ])],
      endereco: ["",
        Validators.compose([
          Validators.required
        ])],
      cidade: ["",
        Validators.compose([
          Validators.required
        ])],
      bairro: ["",
        Validators.compose([
          Validators.required
        ])],
      complemento: ["",
        Validators.compose([
          Validators.required
        ])],
      estado: ["",
        Validators.compose([
          Validators.required
        ])],
      numero: ["",
        Validators.compose([
          Validators.required,
        ])],
      numeroCartao: ["",
        Validators.compose([
          Validators.maxLength(16),
          Validators.required,
          Validacoes.ValidaCartao
        ])],
      cvv: ["",
        Validators.compose([
          Validators.maxLength(3)
        ])],
      dataValidade: ["",
        Validators.compose([
          Validators.required,
          Validacoes.validarData
        ])],
      nomeTitular: ["",
        Validators.compose([
          Validators.required
        ])],
        
        cpfTitular: ["",
        Validators.compose([
          Validators.required,
          Validacoes.ValidaCpf
        ])],
    })
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
}

searchProduct (){
  let product = JSON.parse(localStorage.getItem("cartProduct"))
  for(let i = 0; i < product.length; i++){
    this.cartProduct.push(product[i])
  }
  return product == null ? [] : this.cartProduct
}

}
