import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarrosselComponent implements OnInit {
  images = ["bolasDeLeite", "bolasColoridas", "bolasEspelhadas"].map((n) => `../../../assets/Imagem/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
