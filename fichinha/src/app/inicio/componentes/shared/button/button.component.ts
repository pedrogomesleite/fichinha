import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnText: string = 'Click me!';
  @Output() clicked = new EventEmitter();

  clicou() {
    this.clicked.emit();
  }
}
