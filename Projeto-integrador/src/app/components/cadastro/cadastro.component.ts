import { Component, OnInit } from '@angular/core'
import { Cliente } from "../cliente/Cliente";
import { Validacoes } from '../validar/validacoes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Cep } from '../cep/cep/cep';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  
    formUsuario:FormGroup;
    constructor(private formBuilder: FormBuilder) {
  
    }
    
   
    assunto:any[];
    ngOnInit(): void {
      this.criarCadastro(new Cliente(
        Cliente.nomeCompleto=this.formUsuario.value.nomeCompleto,
        cliente.cpf=this.formUsuario.value.cpf,
        cliente.dataDeNascimento=this.formUsuario.value.dataDeNascimento,
        cliente.genero=this.formUsuario.value.genero,
        cliente.telefone=this.formUsuario.value.telefone,
        cliente.cep=this.formUsuario.value.cep,
        cliente.endereco=this.formUsuario.value.endereco,
        cliente.cidade=this.formUsuario.value.cidade,
        cliente.bairro=this.formUsuario.value.bairro,
        cliente.complemento=this.formUsuario.value.complemento,
        cliente.estado=this.formUsuario.value.estado,
        cliete.email=this.formUsuario.value.email,
        cliente.confirmaEmail=this.formUsuario.value.conferirEmail,
        clliente.senha=this.formUsuario.value.senha,
        cliente.conferirSenha=this.formUsuario.value.conferirSenha
      ))
    }
  
    enviarDados() {
      console.log(this.formUsuario.value);
      
      
    }
  
    
  
    criarCadastro(cliente : Cliente){
      this.formUsuario=this.formBuilder.group({
        nomeCompleto: [
          '',cliente.nomeCompleto,
          Validators.compose([
            Validators.required, // coloquei como obrigatorio
            Validators.maxLength(100) // limitei o maximo de caractere 
  
          ])],
        cpf: ["",cliente.cpf,
          Validators.compose([
            Validators.required,
            Validators.maxLength(11),
            Validacoes.ValidaCpf
  
          ])],
  
        dataDeNascimento: [" ",cliente.dataDeNascimento,
          Validators.compose([
            Validators.required
          ])],
        genero: [" ",cliente.genero,
          Validators.compose([
            Validators.required
          ])],
  
        telefone: [" ",cliente.telefone,
          Validators.compose([
            Validators.required,
            Validators.max(10)
          ])],
  
        cep: [" ",cliente.cep,
          Validators.compose([
            Validators.required,
            Validators.max(8)
          ])],
  
        endereco: [" ",cliente.endereco,
          Validators.compose([
            Validators.required,
          ])],
  
        cidade: [" ",cliente.cidade,
          Validators.compose([
            Validators.required,
          ])],
  
        bairro: [" ",cliente.bairro,
          Validators.compose([
            Validators.required,
          ])],
  
        complemento: [" ",cliente.complemento,
          Validators.compose([
            Validators.required,
          ])],
  
        estado: [" ",cliente.estado,
          Validators.compose([
            Validators.required,
          ])],
  
        email: [" ", cliente.email,
          Validators.compose([
            Validators.email,
          ])],
  
        confirmaEmail: [" ",cliente.confirmaEmail,
          Validators.compose([
            Validators.email,
          ])],
        conferirEmail: Validacoes.conferirEmail,
  
        senha: [" ", cliente.senha,
          Validators.compose([
            Validators.required,
          ])],
  
        confirmaSenha: [" ",cliente.confirmaSenha,
          Validators.compose([
            Validators.required,
          ])],
        conferirSenha: Validacoes.conferirSenha
  
      })
    }

  }









