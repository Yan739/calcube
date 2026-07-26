import { Component, inject } from '@angular/core';
import { CalcEngineService } from '../../services/calc-engine.service';

@Component({
  selector: 'app-scientific-face',
  standalone: true,
  template: `
    <div class="display">{{ engine.display() }}</div>
    <div class="keys">
      @for (key of keys; track key) {
        <button (click)="press(key)">{{ key }}</button>
      }
    </div>
  `,
  styleUrl: './scientific-face.component.scss'
})
export class ScientificFaceComponent {
  engine = inject(CalcEngineService);
  keys = ['sin','cos','tan','√','7','8','9','^','4','5','6','ln','1','2','3','C','0','.','=','π'];

  press(key: string) {
    if (!isNaN(Number(key)) || key === '.') { this.engine.input(key); return; }
    if (key === '=') { this.engine.equals(); return; }
    if (key === 'C') { this.engine.clear(); return; }
    this.applyFunction(key);
  }

  private applyFunction(fn: string) {
    const value = parseFloat(this.engine.display());
    let result = value;
    switch (fn) {
      case 'sin': result = Math.sin(value); break;
      case 'cos': result = Math.cos(value); break;
      case 'tan': result = Math.tan(value); break;
      case '√': result = Math.sqrt(value); break;
      case 'ln': result = Math.log(value); break;
      case 'π': result = Math.PI; break;
      case '^': this.engine.setOperator('^'); return;
    }
    this.engine.display.set(String(result));
  }
}