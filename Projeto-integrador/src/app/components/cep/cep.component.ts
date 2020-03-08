import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/cep.service';
import { Cep } from './cep/cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  constructor(private cepService:CepService) { }

  ngOnInit(): void {
  }
  buscar(){
    this.cepService.buscar(this.cep.cep)
      // .then ((cep:Cep) => this.cep=cep);
  }

  
}
