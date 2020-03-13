import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import { Endereco } from '../models/endereco';
import { Checkout } from '../models/checkout';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  constructor(private http: HttpService) {
    this.formularioCheckout = this.enviarCheckout(new Checkout("","","","",null,"","",""))
  }
  endereco: Endereco = new Endereco("","","","","","","","")


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
}
