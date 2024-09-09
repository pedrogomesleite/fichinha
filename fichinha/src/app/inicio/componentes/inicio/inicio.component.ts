import {Component, OnInit} from '@angular/core';
import { acrobacia } from './../../entidades/jogador'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  display: boolean = true;

  valorDigitado: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.display = !this.display;
    }, 5000);
  }

  exibir() {
    alert(this.valorDigitado);
  }

  protected readonly acrobacia = acrobacia;
}
