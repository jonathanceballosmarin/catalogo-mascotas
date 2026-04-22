import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos {

  favoritos: any[] = [];

  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  }

  eliminarFavorito(id: number) {
    this.favoritos = this.favoritos.filter(f => f.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

}