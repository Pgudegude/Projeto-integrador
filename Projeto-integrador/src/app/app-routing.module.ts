import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { CompraFinalizadaComponent } from './components/compra-finalizada/compra-finalizada.component'
import { LoginComponent } from './components/login/login.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MeusPedidosComponent } from './components/meus-pedidos/meus-pedidos.component';
import { ProdutosCategoryComponent } from './components/produtos-category/produtos-category.component';

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/contato",
    component: ContatoComponent
  }, {
    path: "listaProduto",
    component: ListaProdutosComponent
  },
  {
    path: "home/listaProduto/cadastro",
    component: CadastroComponent
  },
  {
    path: "produto/:code",
    component: ProdutoComponent
  },

  {
    path: "home/cadastro",
    component: CadastroComponent
  },
  {
    path: "home/listaProduto/contato",
    component: ContatoComponent
  },
  {
    path: "home/contato/sobre",
    component: ContatoComponent
  },
  {
    path: "login/listaProduto",
    component: ListaProdutosComponent
  },  {
    path: "login/meusPedidos",
    component: MeusPedidosComponent
  },
  {
    path: "home/contato",
    component: ContatoComponent
  },  {
    path: "meusPedidos/login",
    component: LoginComponent
  },
  {
    path: "home/listaProduto/sobre",
    component: SobreComponent
  },
  {
    path: "home/sobre/contato",
    component: SobreComponent
  },
  {
    path:"listaCategoria/:categoria.id",
    component: ProdutosCategoryComponent
  },
  {
    path: "home/listaProduto/contato/sobre",
    component: SobreComponent
  }, 
  {
    path: "sobre/contato/listaProduto/home",
    component: SobreComponent
  },
  {
    path: "home/sobre",
    component: SobreComponent
  },

  {
    path: 'carrinho', 
    component: CarrinhoComponent
  }, {
    path: "login",
    component: LoginComponent
  },
  {
    path: "listaProduto/sobre",
    component: SobreComponent
  },
  {
    path: "login/cadastro",
    component: CadastroComponent
  },
  {
    path: "carrinho/checkout",
    component: CheckoutComponent
  },
  {
    path: "final",
    component: CompraFinalizadaComponent
  },
  {
    path: "meusPedidos",
    component: MeusPedidosComponent
  },
  {
    path: "final/home",
    component: HomeComponent
  },
  {
    path: "home/listaProduto/cadastro",
    component: CadastroComponent
  }, {
    path: "home/sobre/contato",
    component: ContatoComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
