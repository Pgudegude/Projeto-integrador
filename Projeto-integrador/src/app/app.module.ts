import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CadastroComponent } from './components/cadastro/cadastro.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
>>>>>>> 676f5fa43d16da1e8914f3d6fdaa609ea0c917aa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CadastroComponent
=======
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent
>>>>>>> 676f5fa43d16da1e8914f3d6fdaa609ea0c917aa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
