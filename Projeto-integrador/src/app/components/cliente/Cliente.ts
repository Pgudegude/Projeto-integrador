
export class Cliente {
      constructor(

        public nomeCompleto: string = " ", 
        public cpf: string = " ",
        public dataDeNascimento: Date = null,
        public genero: number = 1,
        public telefone: number = null,
        public cep: number= null,
        public endereco: string="",
        public cidade: string= "",
        public bairro: string= "",
        public complemento: string="",
        public estado : string= "",
        public email: string="",
        public confirmaEmail: string="",
        public senha : string="",
        public confirmaSenha: string=""

        ) {

    }
}


