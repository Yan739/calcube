import { Component } from '@angular/core';
import { CubeComponent } from './cube/cube.component';

@Component({
  selector: 'app-root',
  imports: [CubeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App { }