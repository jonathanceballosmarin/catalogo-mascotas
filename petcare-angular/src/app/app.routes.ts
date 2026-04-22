import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Detalle } from './pages/detalle/detalle';
import { Favoritos } from './pages/favoritos/favoritos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'detalle/:id', component: Detalle },
  { path: 'favoritos', component: Favoritos },
  { path: 'contacto', component: Contacto }
];