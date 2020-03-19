export class Compra{
    constructor(
        public nomeCompleto?: string, 
        public dataDeNascimento?: Date,
        public telefone?: number,
        public cep?: string,
        public endereco?: string,
        public cidade?: string,
        public bairro?: string,
        public complemento?: string,
        public estado ?: string,
        public nomeTitular?:string,
        public cpfTitular?: string,
        public dataValidade?: Date,
        public CVV?: string,
        public numeroCartao?: string
    ){}
}