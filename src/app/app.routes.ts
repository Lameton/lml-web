import { Routes } from '@angular/router';
import { LmlWebsiteComponent } from './pages/lml-website/lml-website.component';

export const routes: Routes = [
  {
    path: '',
    component: LmlWebsiteComponent,
  },

  {
    path: '**',
    redirectTo: '',
  }
];
