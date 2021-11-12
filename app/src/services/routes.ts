import { IRoute } from 'router-slot';

export const routes: Array<IRoute> = [
  {
    path: 'home',
    component: async () => await import('../components/example')
  },
  {
    path: 'login',
    component: async () => await import('../components/login.component')
  },
  {
    path: 'register',
    component: async () => await import('../components/register.component')
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];