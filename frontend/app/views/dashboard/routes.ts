import { Routes } from '@angular/router';
import { EncuestaComponent } from '../../../components/encuesta/encuesta.component'; // Ajusta la ruta según tu estructura

export const routes: Routes = [
  {
    path: 'encuesta',
    component: EncuestaComponent
  },
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    data: {
      title: $localize`Dashboard`
    }
  }
];