import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

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

}