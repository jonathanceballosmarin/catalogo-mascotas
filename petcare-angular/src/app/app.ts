import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // 👈 ESTA LÍNEA ES LA CLAVE
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}