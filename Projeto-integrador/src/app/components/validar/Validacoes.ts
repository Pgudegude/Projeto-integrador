import { AbstractControl, FormControl } from '@angular/forms';

export class Validacoes {

  static ValidaCpf(controle: AbstractControl) {
    let cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) return null;

    return { cpfInvalido: true };
  }

  static ConferirSenha(controle: FormControl) {
    const senha = controle.get('senha').value;
    const confirmaSenha = controle.get('confirmaSenha').value;


    if (confirmaSenha.length == 0) {
      return null;
    }
    if (senha == confirmaSenha) {

      return null
    } else {
      controle.get('confirmaSenha').setErrors({ senhaErrada: true });
    }
  }
  static ConferirEmail(controle: FormControl) {
    const email = controle.get('email').value;
    const confirmaEmail = controle.get('confirmaEmail').value;



    if (email === confirmaEmail) {

      return null
    } else if (confirmaEmail != email) {
      return controle.get('confirmaEmail').setErrors({ emailErrado: true });;
    }

  }


  static MaiorQue18Anos(controle: AbstractControl) {
    const nascimento = controle.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    return { menorDeIdade: true };
  }

  static validarData(controle: AbstractControl) {
    const validar = controle.value;
    const [ano, mes] = validar.split('-');
    const hoje = new Date();
    const dataValidade = new Date(ano, mes, 0, 0);

    if (dataValidade.getTime() >= hoje.getTime())
      return null;

    return { invalido: true };
  }

}
