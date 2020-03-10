import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent} from './components/sobre/sobre.component'
import {CadastroComponent} from './components/cadastro/cadastro.component'

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "contato",
      component: ContatoComponent
    },
    {
      path: "sobre",
      component:SobreComponent
    },
    {
      path:"cadastro",
      component:CadastroComponent
    }

  ]
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
