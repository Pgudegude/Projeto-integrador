import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacoes } from '../validar/Validacoes';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarCadastro();
  }
  enviarCadastro() {
    const dadosFormulario = this.formCadastro.value;
    dadosFormulario.nomeUsuario,
      dadosFormulario.cpfUsuario,
      dadosFormulario.endUsuario,
      dadosFormulario.compleUsuario,
      dadosFormulario.telUsuario,
      dadosFormulario.nascimentoUsuario,
      dadosFormulario.emailUsuario,
      dadosFormulario.confirmarEmail,
      dadosFormulario.senha,
      dadosFormulario.confirmasenha

      ;

    alert(`O usuário ${dadosFormulario.nomeUsuario}foi cadastrado com sucesso. \n Dados: ${JSON.stringify(dadosFormulario)}`);
    console.log(dadosFormulario)
    this.formCadastro.reset();

  }
  criarCadastro() {
    this.formCadastro = this.formBuilder.group({

      nomeCompleto: [
        '',
        Validators.compose([
          Validators.required, // coloquei como obrigatorio
          Validators.maxLength(100) // limitei o maximo de caractere 

        ])],
      cpf: ["",
        Validators.compose([
          Validators.required,
          Validators.maxLength(11),
          Validacoes.ValidaCpf

        ])],

      dataDeNascimento: ["",
        Validators.compose([
          Validators.required
        ])],
    

      telefone: ["",
        Validators.compose([
          Validators.required,
          Validators.max(10)
        ])],

      cep: ["",
        Validators.compose([
          Validators.required,
          Validators.max(8)
        ])],

      endereco: ["",
        Validators.compose([
          Validators.required,
        ])],

      cidade: ["",
        Validators.compose([
          Validators.required,
        ])],

      bairro: ["",
        Validators.compose([
          Validators.required,
        ])],

      complemento: ["",
        Validators.compose([
          Validators.required,
        ])],

      estado: ["",
        Validators.compose([
          Validators.required,
        ])],
        // numero: ["",
        // Validators.compose([
        //   Validators.required,
        // ])],

      email: ["", 
        Validators.compose([
          Validators.email,
        ])],

      confirmaEmail: ["",
        Validators.compose([
          Validators.email,
        ])],
      conferirEmail: Validacoes.conferirEmail,

      senha: ["", 
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ])],

      confirmaSenha: ["",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ])],
      conferirSenha: Validacoes.conferirSenha

    })
  }
  //os gets irao mostrar a informação para o usuario
  get nomeCompleto() {
    return this.formCadastro.get('nomeCompleto');
  }
  get cpf() {
    return this.formCadastro.get('cpf');
  }

  get dataDeNascimento() {
    return this.formCadastro.get('dataDeNascimento');
  }
  get telefone () {
    return this.formCadastro.get('telefone');
  }
  get cep() {
    return this.formCadastro.get('cep');
  }
  get endereco() {
    return this.formCadastro.get('endereco');
  }

  get cidade() {
    return this.formCadastro.get('cidade');
  }

  get bairro() {
    return this.formCadastro.get('bairro');
  }
  get complemento() {
    return this.formCadastro.get('complemento');
  }

  get estado() {
    return this.formCadastro.get('estado');
  }

  get email() {
    return this.formCadastro.get('email');
  }
  get confirmaEmail() {
    return this.formCadastro.get('email');
  }

  get senha() {
    return this.formCadastro.get('senha');
  }
  
  get confirmaSenha() {
    return this.formCadastro.get('confirmaSenha');
  }
}

