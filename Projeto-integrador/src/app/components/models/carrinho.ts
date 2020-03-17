import { Produtos } from './produtos';

export class Carrinho{
    constructor(public produto:Produtos, public quantidade: number){}
}