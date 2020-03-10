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

const routes: Routes = [

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
    path: "listaProduto",
    component: ListaProdutosComponent
  },
  {
    path: "produto",
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
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
path: "**",
redirectTo: "/home",
pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
