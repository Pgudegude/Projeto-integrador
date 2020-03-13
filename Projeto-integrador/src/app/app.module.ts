import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import {ROUTES} from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    ProdutoComponent,
    ListaProdutosComponent,
    CarrinhoComponent,
    LoginComponent,
    MenuComponent,
    SobreComponent,
    CadastroComponent,
    CheckoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
