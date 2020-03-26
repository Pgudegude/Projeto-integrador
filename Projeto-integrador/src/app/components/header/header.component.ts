import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

logar:boolean;

  constructor(private http:HttpService) { }
  verificarLogin(){  
    let usuario =  JSON.parse(localStorage.getItem("usuario"))
    if(usuario==null){
      this.logar=true
      console.log("usuário não logado")
    }
    else{this.logar=false
    console.log(usuario)}
    }
  ngOnInit(): void {

 this.verificarLogin()
}
}
