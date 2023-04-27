import { Component, Input } from '@angular/core';
import { Animale } from '../models/animali.model'

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent {
  @Input() animali : Animale;

  constructor(){}
}
