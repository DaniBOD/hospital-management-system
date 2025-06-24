import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Intranet',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'HOME'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Evaluaciones',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    title: true,
    name: 'Usuarios'
  },
  {
    name: 'Usuarios',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Listado',
        url: '/usuarios'
      },
      {
        name: 'Crear',
        url: '/usuarios/crear'
      }
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Paginas',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Boxes',
    iconComponent: { name: 'cil-building' },
    children: [
      {
        name: 'Listado',
        url: '/boxes'
      },
      {
        name: 'Crear',
        url: '/boxes/crear'
      }
    ]
  },
  {
    name: 'Encuesta',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSexAOGxzu5RxBuigJ_CE7rGBArI8tQnL9ABtQqPD60EZ6FUdg/viewform?usp=header',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
