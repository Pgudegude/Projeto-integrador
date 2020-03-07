import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ListaProdutosComponent  } from "./components/lista-produtos/lista-produtos.component";
import { ProdutoComponent } from './components/produto/produto.component';

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "contato",
      component: ContatoComponent
    },{
      path: "listaProduto",
      component: ListaProdutosComponent
    },
    {
      path: "produto",
      component: ProdutoComponent
    }

  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  