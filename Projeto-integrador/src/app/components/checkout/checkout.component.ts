import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Endereco } from '../models/endereco';
import { Checkout } from '../models/checkout';
import { Validacoes } from '../validar/Validacoes';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  constructor(private http: HttpService, private fb:  FormBuilder) {
    this.formularioCheckout = this.enviarCheckout(new Checkout("","","","",null,"","",""))
  }
  endereco: Endereco = new Endereco("","","","","","","","")

  total: any = "R$ 108.89";
  valor: number = 108.89 ;


  freteR = () => {
      this.total = (108.89 + 50 ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  freteN = () => {
    this.total = (108.89 + 20 ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  formularioCheckout: FormGroup;

  
  enviarCheckout(check: Checkout) {
    return new FormGroup({
      nome: new FormControl(check.nomeCompleto),
      telefone: new FormControl(check.telefone),
      cep: new FormControl(check.cep),
      endereco: new FormControl(check.endereco),
      numero: new FormControl(check.numero),
      bairro: new FormControl(check.bairro),
      cidade: new FormControl(check.cidade),
      estado: new FormControl(check.estado)
    })
  }
  
  capturarCEP(){
    this.http.getCep(this.formularioCheckout.value).subscribe((data)=>{
      this.endereco.setEndereco(data.cep,data.logradouro,data.bairro,data.uf,data.uf)
      this.formularioCheckout.controls['endereco'].patchValue(this.endereco.endereco);
      this.formularioCheckout.controls['bairro'].patchValue(this.endereco.bairro);
      this.formularioCheckout.controls['estado'].patchValue(this.endereco.estado);
      this.formularioCheckout.controls['cidade'].patchValue(this.endereco.cidade);
    })
  }

    ngOnInit(): void {
    }

    enviarCompra(){
      console.log(this.formularioCheckout.value);
      
    }

  criarCadastro() {
      this.formularioCheckout = this.fb.group({
        nomeCompleto: [
          '',
          Validators.compose([
            Validators.required, // coloquei como obrigatorio
            Validators.maxLength(100) // limitei o maximo de caractere 
          ])],
        cpfTitular: ["",
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
        email: ["",
          Validators.compose([
            Validators.email
          ])],
        confirmaEmail: ["",
          Validators.compose([
            Validators.email
          ])]
      })
    }
  
  
  
  
  
  
  
  
  
  
  
  
}
