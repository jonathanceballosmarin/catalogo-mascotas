import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviado: boolean = false;

  enviarFormulario() {

    if (!this.nombre || !this.email || !this.mensaje) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (!this.validarEmail(this.email)) {
      alert('Correo inválido');
      return;
    }

    this.enviado = true;

    // limpiar formulario
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }

  validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

}