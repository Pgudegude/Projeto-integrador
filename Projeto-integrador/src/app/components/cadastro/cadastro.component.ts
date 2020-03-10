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
      genero: ["",
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



  }

