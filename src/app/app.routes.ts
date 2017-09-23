import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
];
