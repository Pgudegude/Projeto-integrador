import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class  ContatoComponent implements OnInit {

  formularioDeContato:FormGroup;
  constructor(private fb: FormBuilder) {

  }
 
  assunto:any[];
  ngOnInit(): void {
    this.criarFormularioDeContato();
  }

  enviarDados() {
    console.log(this.formularioDeContato.value);
    alert(`sua ${this.formularioDeContato.value.assunto} foi enviada com sucesso`)
    
  }

  

  criarFormularioDeContato(){
    this.formularioDeContato=this.fb.group({
      nome:[''],
      email:[''],
      assunto:[''],
      comentario:['']
    })
  }
}
 