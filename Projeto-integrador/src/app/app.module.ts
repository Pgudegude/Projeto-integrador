import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CepComponent } from './components/cep/cep.component';
import {CepService} from "./cep.service";

import { HttpClientModule }    from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CepComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CepService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
