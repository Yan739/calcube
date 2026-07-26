import { Component, inject } from '@angular/core';
import { CalcEngineService } from '../../services/calc-engine.service';

@Component({
  selector: 'app-history-face',
  standalone: true,
  template: `
    <h3>Historique</h3>
    @if (engine.history().length === 0) {
      <p class="empty">Aucun calcul pour l'instant</p>
    } @else {
      <ul>
        @for (entry of engine.history(); track entry) {
          <li>{{ entry }}</li>
        }
      </ul>
    }
  `,
  styleUrls: ['./history-face.component.scss']
})
export class HistoryFaceComponent {
  engine = inject(CalcEngineService);
}