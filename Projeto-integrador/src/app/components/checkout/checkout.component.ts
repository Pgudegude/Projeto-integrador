import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Endereco } from '../models/Endereco';
import { Validacoes } from '../validar/Validacoes';
import { Compra } from '../models/Compra';
import { Carrinho } from '../models/carrinho';
import { StockService } from 'src/app/service/stock.service';
import { Pedido } from '../models/Pedido';
import { Cliente } from '../models/Cliente';
import { Pagamento } from '../models/Pagamento';
import { PedidoService } from 'src/app/service/pedido.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { StatusRequest } from '../models/StatusRequest';


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
  login: boolean;
  user: any
  escolha:any
  

  constructor(private http: HttpService,
    private router: Router,
    private http3: LoginService,
    private fb: FormBuilder,
    private stock: StockService,
    private http2: PedidoService,
  ) {

    this.searchProduct()
    this.carrinho = this.stock.recoverCart()

    this.carrinho.forEach(item => {
      this.total += item.produto.valueProduct * item.quantidade;
    })
    this.calcularTotal();
    this.mostrandoQuantidade();

  }

  endereco: Endereco = new Endereco("", "", "", "", "", "", "", "")

  capturarCEP() {
    this.http.getCep(this.formularioCheckout.value).subscribe((data) => {
      this.endereco.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formularioCheckout.controls['endereco'].patchValue(this.endereco.endereco);
      this.formularioCheckout.controls['bairro'].patchValue(this.endereco.bairro);
      this.formularioCheckout.controls['estado'].patchValue(this.endereco.estado);
      this.formularioCheckout.controls['cidade'].patchValue(this.endereco.cidade);
    })
  }

  ngOnInit(): void {
    this.criarDadosCompra();
    this.verificarLogin();
  }

  data: Date = new Date()

  enviarDadosCompra() {
    let pagamento: Pagamento = new Pagamento("aguardando aprovação")
    let endereco: Endereco = JSON.parse(sessionStorage.getItem("endereco"))    
    let pedido: StatusRequest = new StatusRequest(
      null, this.data,"Aguardando Pagamento",new Pedido(
      this.totalComDesconto,
      this.frete,
      this.data,
      this.usuario,
      pagamento,
      this.formularioCheckout.value.nomeCompleto,
      this.formularioCheckout.value.telefone,
      endereco)
    )
    this.http2.envPedido(pedido).subscribe(
      elem => {
        alert("Pedido concluido com sucesso")
        let elemento = JSON.stringify(elem)
        sessionStorage.setItem('pedido', elemento)
        this.salvarItensBanco()
        return this.router.navigate(['/final'])
      }
    )
  }

  salvarItensBanco() {
      
    let request = JSON.parse(sessionStorage.getItem('pedido'))
    console.log(request)
    console.log(this.carrinho)
    this.http2.envItemCart(request, this.carrinho)
    sessionStorage.removeItem('cartProduct')
  }

  criarDadosCompra() {
    this.formularioCheckout = this.fb.group({
      nomeCompleto: [
        '',
        Validators.compose([
          Validators.required, // coloquei como obrigatorio
          Validators.maxLength(100)  // limitei o maximo de caractere 
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
      complemento: [""],
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
          Validators.maxLength(3),
          Validators.minLength(3)
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
    this.cadastrarEndereco()
  }
  capturarCEP2() {
    this.http.getCep(this.formularioEndereco.value).subscribe((data) => {
      this.endereco.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formularioEndereco.controls['endereco'].patchValue(this.endereco.endereco);
      this.formularioEndereco.controls['bairro'].patchValue(this.endereco.bairro);
      this.formularioEndereco.controls['estado'].patchValue(this.endereco.estado);
      this.formularioEndereco.controls['cidade'].patchValue(this.endereco.cidade);
    })
  }
  formularioEndereco: FormGroup
  cadastrarEndereco() {
    this.formularioEndereco = this.fb.group({
      nomeCompleto: [
        '',
        Validators.compose([
          Validators.required, // coloquei como obrigatorio
          Validators.maxLength(100)  // limitei o maximo de caractere 
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
      complemento: [""],
      estado: ["",
        Validators.compose([
          Validators.required
        ])],
      numero: ["",
        Validators.compose([
          Validators.required,
        ])],
    })
  }
  enviarEndereco() {
    let end = new Endereco(this.formularioEndereco.value.cep,
       this.formularioEndereco.value.endereco,
       this.formularioEndereco.value.bairro,
       this.formularioEndereco.value.numero,
       this.formularioEndereco.value.estado,
       this.formularioEndereco.value.cidade,
       this.formularioEndereco.value.complemento, 
        )
    this.http2.cadastroEndereco(this.usuario,end).subscribe(data=>{
      end = new Endereco(data.zipCode,data.logradouro, data.neighborhood, data.number, data.state, data.city, data.complemnt, data.idAddress)
      sessionStorage.setItem("endereco",JSON.stringify(end))
     }
      )
    this.formularioCheckout.controls['nomeCompleto'].patchValue(this.formularioEndereco.value.nomeCompleto)
    this.formularioCheckout.controls['telefone'].patchValue(this.formularioEndereco.value.telefone)
    this.formularioCheckout.controls['cep'].patchValue(this.formularioEndereco.value.cep)
    this.formularioCheckout.controls['endereco'].patchValue(this.formularioEndereco.value.endereco)
    this.formularioCheckout.controls['cep'].patchValue(this.formularioEndereco.value.cep)
    this.formularioCheckout.controls['numero'].patchValue(this.formularioEndereco.value.numero)
    this.formularioCheckout.controls['complemento'].patchValue(this.formularioEndereco.value.complemento)
    this.formularioCheckout.controls['bairro'].patchValue(this.formularioEndereco.value.bairro)
    this.formularioCheckout.controls['cidade'].patchValue(this.formularioEndereco.value.cidade)
    this.formularioCheckout.controls['estado'].patchValue(this.formularioEndereco.value.estado)
    this.user= true
    this.escolha = true 
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
  calcularTotal = () => {
    this.total = 0
    this.carrinho.forEach(item => {
      this.total += item.produto.valueProduct * item.quantidade;
      if (this.total != 0) {
        this.desconto = (this.total * 0.7)
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
  searchProduct() {
    let product = JSON.parse(sessionStorage.getItem("cartProduct"))
    for (let i = 0; i < product.length; i++) {
      this.cartProduct.push(product[i])

    }
    return product == null ? [] : this.cartProduct
  }

  usuario: Cliente
  verificarLogin() {
    this.carrinho = this.stock.recoverCart();
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
  }
  resp: Endereco[] 
  userExist() {
    this.user = JSON.parse(atob(sessionStorage.getItem("usuario")))
    this.http3.pegarEndereco(this.user).subscribe(data => {
      console.log(data)
      this.resp = data
        })
  }
  preencherEndereco(endereco:Endereco){
      this.formularioCheckout.controls['nomeCompleto'].patchValue(this.user.name)
      this.formularioCheckout.controls['telefone'].patchValue(this.user.phone)
      this.formularioCheckout.controls['cep'].patchValue(this.user.cep)
      this.formularioCheckout.controls['endereco'].patchValue(endereco.endereco)
      this.formularioCheckout.controls['cep'].patchValue(endereco.cep)
      this.formularioCheckout.controls['numero'].patchValue(endereco.numero)
      this.formularioCheckout.controls['complemento'].patchValue(endereco.complemento)
      this.formularioCheckout.controls['bairro'].patchValue(endereco.bairro)
      this.formularioCheckout.controls['cidade'].patchValue(endereco.cidade)
      this.formularioCheckout.controls['estado'].patchValue(endereco.estado)
      this.escolha = true
     let end = endereco
      endereco = new Endereco(end._cep, end._endereco, end._bairro, end._numero, end._estado, end._cidade, end._complemento, end._id)
      sessionStorage.setItem("endereco", JSON.stringify(endereco))
  }
}