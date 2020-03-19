import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Endereco } from '../models/Endereco';
import { Validacoes } from '../models/Validacoes';
import { Compra } from '../models/Compra';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  constructor(private http: HttpService, private fb: FormBuilder) {
    this.formularioCheckout = this.enviarDaDosCompra(new Compra)
  }

  endereco: Endereco = new Endereco("", "", "", "", "", "", "", "")

  total: any = "R$ 108.89";
  valor: number = 108.89;


  freteR = () => {
    this.total = (108.89 + 50).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  freteN = () => {
    this.total = (108.89 + 20).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  formularioCheckout: FormGroup;



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
}
