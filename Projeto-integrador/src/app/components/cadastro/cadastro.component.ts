import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { Validacoes } from '../models/Validacoes';
import { Endereco } from "../models/Endereco";
import { CepService } from 'src/app/cep.service';
import { Cliente } from '../models/cliente';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private CEP: CepService
  ) {
    this.formCadastro = this.enviarCadastro(new Cliente())
  }
  endereco: Endereco = new Endereco("", "", "", "", "", "")
  ngOnInit(): void {
    this.criarCadastro();
  }
  //envia os dados do formulario
  enviarCadastro(cliente: Cliente) {

    return new FormGroup({
      nomeCompleto: new FormControl(cliente.nomeCompleto),
      cpf: new FormControl(cliente.cpf),
      dataDeNascimento: new FormControl(cliente.dataDeNascimento),
      telefone: new FormControl(cliente.telefone),
      cep: new FormControl(cliente.cep),
      endereco: new FormControl(cliente.endereco),
      cidade: new FormControl(cliente.cidade),
      bairro: new FormControl(cliente.bairro),
      complemento: new FormControl(cliente.complemento),
      estado: new FormControl(cliente.estado),
      email: new FormControl(cliente.email),
      confirmaEmail: new FormControl(cliente.confirmaEmail),
      senha: new FormControl(cliente.senha),
      confirmaSenha: new FormControl(cliente.confirmaSenha)
    })


  }




  //Valida os campos
  criarCadastro() {
    this.formCadastro = this.formBuilder.group({
      nomeCompleto: [
        '',
        Validators.compose([
          Validators.required,
        ])],
      cpf: ["",
        Validators.compose([
          Validators.required,
          Validators.maxLength(11),
          Validacoes.ValidaCpf
        ])],
      dataDeNascimento: ["",
        Validators.compose([
          Validators.required,
          Validacoes.MaiorQue18Anos
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

        ])],
      estado: ["",
        Validators.compose([
          Validators.required
        ])],
      numero: ["",
        Validators.compose([
          Validators.required,
        ])],
      email: ["",
        Validators.compose([
          Validators.email,
          Validators.required
        ])],
      confirmaEmail: ["",
        Validators.compose([
          Validators.email,
          Validators.required,
        ])],
      senha: ["",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ])],
      confirmaSenha: ["",
        Validators.compose([

          Validators.minLength(8),
          Validators.maxLength(12)

        ])]
    }, {
      validators: [Validacoes.ConferirSenha, Validacoes.ConferirEmail]
    });

  }
  get confirmaSenha() {
    return this.formCadastro.get('confirmaSenha');
  }
  get confirmaEmail() {
    return this.formCadastro.get('confirmaEmail');
  }
  capturarCEP() {
    this.CEP.getCep(this.formCadastro.value).subscribe((data) => {
      this.endereco.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.uf)
      this.formCadastro.controls['endereco'].patchValue(this.endereco.endereco);
      this.formCadastro.controls['bairro'].patchValue(this.endereco.bairro);
      this.formCadastro.controls['estado'].patchValue(this.endereco.estado);
      this.formCadastro.controls['cidade'].patchValue(this.endereco.cidade);
    })
  }


}











