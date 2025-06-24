import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { EncuestaComponent } from '../components/encuesta/encuesta.component'; // Ajusta la ruta si es necesario
import { UsuariosListComponent } from '../components/usuarios-list/usuarios-list.component';



export const routes: Routes = [
  { 
    path: 'usuarios', 
    component: UsuariosListComponent 
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'boxes',
        loadComponent: () => import('../components/box/box-list.component').then(m => m.BoxListComponent)
      },
      {
        path: 'boxes/crear',
        loadComponent: () => import('../components/box/box-crear.component').then(m => m.BoxCrearComponent)
      },
      {
        path: 'boxes/editar/:id',
        loadComponent: () => import('../components/box/box-editar.component').then(m => m.BoxEditarComponent)
      },
      {
        path: 'usuarios/editar/:id',
        loadComponent: () => import('../components/usuario-editar/usuario-editar.component').then(m => m.UsuarioEditarComponent)
      },
      {
        path: 'usuarios/crear',
        loadComponent: () => import('../components/usuario-crear/usuario-crear.component').then(m => m.UsuarioCrearComponent)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
