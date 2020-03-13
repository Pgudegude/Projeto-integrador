export class Checkout{
    constructor(
        public nomeCompleto: string, 
        public telefone: string, 
        public cep:string, 
        public endereco: string, 
        public numero: number,
        public bairro: string,
        public cidade: string,
        public estado: string,
        public numeroCartao?: string,
        public dataValidade?: Date,
        public CVV?: number,
        public nomeTitular?: string,
        public cpfTitular?: string
        ){}
}