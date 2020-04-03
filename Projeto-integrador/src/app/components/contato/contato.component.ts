import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Contato } from '../models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class  ContatoComponent implements OnInit {

  formularioDeContato:FormGroup;
  constructor(private fb: FormBuilder, private contatar:HttpService) {  }
 
  assunto:any[];
  ngOnInit(): void {

    this.criarFormularioDeContato(new Contato());
  }

  
  
  enviarDados() {
    console.log(this.formularioDeContato.value);
    alert(`sua ${this.formularioDeContato.value.assunto} foi enviada com sucesso`)
    this.contatar.insertContato(this.formularioDeContato.value).subscribe(
      data => {
          data
        }
    )
      }

  criarFormularioDeContato(contato:Contato){
    this.formularioDeContato=this.fb.group({
      nome:[contato.nome],
      email:[contato.email],
      assunto:[contato.assunto], 
      comentario:[contato.comentario]
    })
  }
}
 