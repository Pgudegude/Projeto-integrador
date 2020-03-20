import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public product: any[] = [];
    
  public productDisplay: any[] = [];

  constructor(public http: HttpService) {

  }

 

  ngOnInit(): void {
  }

}
