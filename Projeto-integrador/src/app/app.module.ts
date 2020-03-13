import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import{HttpClientModule} from "@angular/common/http"
import { from } from 'rxjs';
import { NgxViacepModule } from '@brunoc/ngx-viacep';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    CadastroComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxViacepModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
