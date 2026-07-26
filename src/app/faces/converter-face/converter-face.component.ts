import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-converter-face',
  standalone: true,
  template: `
    <h3>Convertisseur</h3>
    <select [value]="unit()" (change)="onUnitChange($event)">
      <option value="km-mi">km → miles</option>
      <option value="kg-lb">kg → livres</option>
      <option value="c-f">°C → °F</option>
    </select>
    <input
      type="number"
      [value]="value()"
      (input)="onValueChange($event)"
      placeholder="Valeur"
    />
    <div class="result">{{ result() }}</div>
  `,
  styleUrls: ['./converter-face.component.scss']
})
export class ConverterFaceComponent {
  unit = signal('km-mi');
  value = signal(0);

  result = computed(() => {
    const v = this.value();
    switch (this.unit()) {
      case 'km-mi': return (v * 0.621371).toFixed(2) + ' mi';
      case 'kg-lb': return (v * 2.20462).toFixed(2) + ' lb';
      case 'c-f': return (v * 9 / 5 + 32).toFixed(2) + ' °F';
      default: return '';
    }
  });

  onUnitChange(event: Event) {
    this.unit.set((event.target as HTMLSelectElement).value);
  }

  onValueChange(event: Event) {
    this.value.set(Number((event.target as HTMLInputElement).value));
  }
}