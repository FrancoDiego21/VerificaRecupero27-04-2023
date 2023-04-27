import { Component } from '@angular/core';
import { Animale } from './models/animali.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animali : Animale[]

  constructor(){
    this.animali = [
      new Animale("cane", "bau", 4, "cammina"),
      new Animale("rana", "cra", 4, "salta"),
      new Animale("canarino", "fiu", 2, "vola"),
      new Animale("serpente", "fss", 0, "striscia"),
      
    ]    
  }

  OrdineNome(){
    this.animali= this.animali.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  OrdineZampe(){
    this.animali= this.animali.sort((a, b) => a.zampe - (b.zampe));

  }



}
