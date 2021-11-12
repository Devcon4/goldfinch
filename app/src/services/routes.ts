import { IRoute } from 'router-slot';

export const routes: Array<IRoute> = [
  {
    path: 'auth/login',
    component: async () => await import('../components/login.component')
  },
  {
    path: 'auth/register',
    component: async () => await import('../components/register.component')
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];