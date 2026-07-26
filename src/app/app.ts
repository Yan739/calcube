import { Component } from '@angular/core';
import { CubeComponent } from './cube/cube.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CubeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App { }