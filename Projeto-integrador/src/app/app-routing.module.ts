import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ListaProdutosComponent } from "./components/lista-produtos/lista-produtos.component";
import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";
import { LoginComponent } from './components/login/login.component'
import { SobreComponent } from './components/sobre/sobre.component'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { CheckoutComponent } from "./components/checkout/checkout.component";

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
    path: "contato",
    component: ContatoComponent
  }, {
    path: "home/listaProduto",
    component: ListaProdutosComponent
  },
  {
    path: "home/listaProduto/:id",
    component: ProdutoComponent
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
  }, {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sobre",
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
