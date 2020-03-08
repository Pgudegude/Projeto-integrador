import { Component, OnInit } from '@angular/core'

import { Validacoes } from '../validar/validacoes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Cep } from '../cep/cep/cep';
import{Cliente} from "../cliente/Cliente"
import { from } from 'rxjs';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  
    formUsuario:FormGroup;
    constructor(private formBuilder: FormBuilder) {
  
    }
    
   
  
    ngOnInit(): void {
      this.criarCadastro(new Cliente());
}
    
  
    enviarDados() {
      console.log(this.formUsuario.value);
      
      
    }
  
    
  
    criarCadastro( cliente : Cliente){
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

    onSubmit(){
      console.log(this.formUsuario.value)
      this.criarCadastro(new Cliente()) ;

     
    }
  }









