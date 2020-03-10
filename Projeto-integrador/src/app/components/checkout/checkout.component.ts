import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formularioCheckout: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioCheckout();
  }

  enviarCheckout() {
    const dadosFormulario = this.formularioCheckout.value;
      dadosFormulario.cep,
      dadosFormulario.endEntrega,
      dadosFormulario.complemento,
      dadosFormulario.telUsuario,
      dadosFormulario.nascimentoUsuario
  }

  criarFormularioCheckout() {
    this.formularioCheckout = this.fb.group({
      cpf: [],
      cep: [],
      complemento: [],
      telUsuario: [],
      nascimentoUsuario: []
    })
  }


  validar = (elemento) => {
    if (isNaN(elemento.value)) {
        elemento.value = elemento.value.substring(0,(elemento.value.length - 1))
    }
}

}
