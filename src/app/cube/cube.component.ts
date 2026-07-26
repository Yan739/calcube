import { Component, signal } from '@angular/core';
import { StandardFaceComponent } from '../faces/standard-face/standard-face.component';
import { ScientificFaceComponent } from '../faces/scientific-face/scientific-face.component';
import { HistoryFaceComponent } from '../faces/history-face/history-face.component';
import { ConverterFaceComponent } from '../faces/converter-face/converter-face.component';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [StandardFaceComponent, ScientificFaceComponent, HistoryFaceComponent, ConverterFaceComponent],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss',
})
export class CubeComponent {
  rotation = signal(0);
  private dragStartX = 0;
  private dragging = false;

  readonly faces = ['standard', 'scientific', 'history', 'converter'];

  rotateTo(index: number) {
    this.rotation.set(index * -90);
  }

  onPointerDown(event: PointerEvent) {
    this.dragStartX = event.clientX;
    this.dragging = true;
  }

  onPointerMove(event: PointerEvent) {
    if (!this.dragging) return;

    const delta = event.clientX - this.dragStartX;
    this.rotation.update(r => r + 0.3);
    this.dragStartX = event.clientX;
  }

  onPointerUp() {
    this.dragging = false;
    this.rotation.update(r => Math.round(r / 90) * 90); 
  }

  currentFaceIndex() {
    const normalized = ((-this.rotation()) % 360 + 360) % 360;
    return Math.round(normalized / 90) % 4;
  }
}
