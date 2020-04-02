import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MeusPedidosComponent } from './components/meus-pedidos/meus-pedidos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { ProdutosCategoryComponent } from './components/produtos-category/produtos-category.component';

//definindo tipo de moeda 
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');


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
    MeusPedidosComponent,
    ProdutosCategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // ModalModule,
    // BsDropdownModule,
    // CarouselModule,
    // WavesModule,
    // ButtonsModule, 
    NgbModule,
    HttpClientModule,
    // MatDatepickerModule,
    // TextMaskModule,
    
    RouterModule.forRoot(ROUTES),
    
    BrowserAnimationsModule
  

  ],
  exports: [BsDropdownModule,  ModalModule], 
  providers: [  {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
