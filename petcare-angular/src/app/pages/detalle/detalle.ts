import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle {

  servicio: any;

  servicios = [
    {
      id: 1,
      nombre: 'Baño y Peluquería',
      descripcion: 'Servicio completo de limpieza y corte para tu mascota.',
      imagen: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d'
    },
    {
      id: 2,
      nombre: 'Consulta Veterinaria',
      descripcion: 'Revisión médica profesional para tu mascota.',
      imagen: 'https://images.unsplash.com/photo-1574158622682-e40e69881006'
    },
    {
      id: 3,
      nombre: 'Guardería Canina',
      descripcion: 'Cuidado diario en un ambiente seguro y divertido.',
      imagen: 'https://images.unsplash.com/photo-1558788353-f76d92427f16'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio = this.servicios.find(s => s.id === id);
  }

  agregarFavorito() {
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    // evitar duplicados
    if (!favoritos.find((f: any) => f.id === this.servicio.id)) {
      favoritos.push(this.servicio);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      alert('Agregado a favoritos ⭐');
    } else {
      alert('Ya está en favoritos');
    }
  }

}