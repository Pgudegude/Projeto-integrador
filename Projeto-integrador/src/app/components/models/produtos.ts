export class Produtos {
    constructor(
        public id: number,
        public nome:string,
        public code:number,
        public preco:number,
        public desc: string,
        public categoria: number
        ) {
    }
}