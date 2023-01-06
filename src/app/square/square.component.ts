import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      <!-- {{ rando }} -->
    </p>
    <button>
      {{value}}
    </button>
  `,
  styles: [
  ]
})
export class SquareComponent {

  // rando = 0;
  // constructor() {
  //   setInterval(() => this.rando = Math.random(), 500);
  // }
  @Input()
  value!: 'X' | 'O';
}
