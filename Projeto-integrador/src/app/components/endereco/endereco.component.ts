import { Component, OnInit } from '@angular/core';
import { NgxViacepService, Endereco } from '@brunoc/ngx-viacep';
import { UserAndress} from '../models/Endereco';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
 public endereco : Endereco []= []

 formCadastro: FormGroup;

  constructor( 
    private viacep: NgxViacepService,

    ) {
    
    this.viacep.buscarPorCep('01001000').then( ( endereco: Endereco ) => {    
      console.log(endereco);
      
    //  }).catch( (error: ErroCep) => {
      
      // console.log(error.message);
     });
  
    }
   



  ngOnInit(): void {
  }



}
