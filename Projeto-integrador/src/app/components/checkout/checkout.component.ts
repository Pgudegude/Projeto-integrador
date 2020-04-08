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


  constructor(private http: HttpService, private router: Router, private http3: LoginService, private fb: FormBuilder, private stock: StockService, private http2: PedidoService) {
    this.formularioCheckout = this.enviarDaDosCompra(new Compra)
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
  data: Date = new Date()

  enviarDadosCompra() {
    let pagamento: Pagamento = new Pagamento("aguardando aprovação")
    let endereco: Endereco = new Endereco(
      this.formularioCheckout.value.cep,
      this.formularioCheckout.value.endereco,
      this.formularioCheckout.value.bairro,
      this.formularioCheckout.value.numero,
      this.formularioCheckout.value.estado,
      this.formularioCheckout.value.cidade,
      this.formularioCheckout.value.complemento
    )
    let pedido: Pedido = new Pedido(
      this.totalComDesconto,
      this.frete,
      "Aguardando Pagamento",
      this.data,
      this.usuario,
      pagamento,
      this.formularioCheckout.value.nomeCompleto,
      this.formularioCheckout.value.telefone,
      endereco
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

  resp: Endereco
  userExist() {

    this.user = JSON.parse(atob(sessionStorage.getItem("usuario")))
    this.http3.pegarEndereco(this.user).subscribe(data => {
    this.resp = data
      this.formularioCheckout.controls['nomeCompleto'].patchValue(this.user.name)
      this.formularioCheckout.controls['telefone'].patchValue(this.user.phone)
      this.formularioCheckout.controls['cep'].patchValue(this.user.cep)
      this.formularioCheckout.controls['endereco'].patchValue(this.resp.endereco)
      this.formularioCheckout.controls['cep'].patchValue(this.resp.cep)
      this.formularioCheckout.controls['numero'].patchValue(this.resp.numero)
      this.formularioCheckout.controls['complemento'].patchValue(this.resp.complemento)
      this.formularioCheckout.controls['bairro'].patchValue(this.resp.bairro)
      this.formularioCheckout.controls['cidade'].patchValue(this.resp.cidade)
      this.formularioCheckout.controls['estado'].patchValue(this.resp.estado)
    })
  }
}