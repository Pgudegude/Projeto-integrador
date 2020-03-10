import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formularioDeCadastro:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioDeCadastro();
  }
  enviarCadastro(){
    const dadosFormulario = this.formularioDeCadastro.value;
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
    this.formularioDeCadastro.reset();
    
  }
  criarFormularioDeCadastro(){
    this.formularioDeCadastro=this.formBuilder.group({
      nomeUsuario:[''
      ,
      Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(100)
      ])
    ],
      cpfUsuario:[''],
      endUsuario:['',
      Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(100)
      ])],
      compleUsuario:['', Validators.compose([Validators.required, 
        Validators.minLength(3),Validators.maxLength(20)])],
      telUsuario:['', Validators.compose
      ([ Validators.required, Validators.minLength(11), Validators.maxLength(11)
      ])],
      nascimentoUsuario:[''],
      emailUsuario:[''],
      confirmarEmail:[''],
      senha:[''],
      confirmasenha:['']
    })
  }
}
