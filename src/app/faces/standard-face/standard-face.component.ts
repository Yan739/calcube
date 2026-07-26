import { Component, inject } from '@angular/core';
import { CalcEngineService } from '../../services/calc-engine.service';

@Component({
  selector: 'app-standard-face',
  standalone: true,
  template: `
    <div class="display">{{ engine.display() }}</div>
    <div class="keys">
      @for (key of keys; track key) {
        <button (click)="press(key)">{{ key }}</button>
      }
    </div>
  `,
  styleUrls: ['./standard-face.component.scss']
})
export class StandardFaceComponent {
  engine = inject(CalcEngineService);
  keys = ['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'];

  press(key: string) {
    if (!isNaN(Number(key))) this.engine.input(key);
    else if (key === '=') this.engine.equals();
    else if (key === 'C') this.engine.clear();
    else this.engine.setOperator(key);
  }
}