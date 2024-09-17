import { Routes } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { SomosComponent } from './screens/somos/somos.component';
import { DefaultComponent } from './frames/default/default.component';
import { environment } from '../environments/environment';
import e from 'express';

export const routes: Routes = [
  {path:'', component: DefaultComponent, children: [
    {path:'somos', component: SomosComponent, data: {title: `${environment.title} Somos`}},
    {path: '', component: LandingComponent, data: {title: `${environment.title} Inicio`}}
  ]},
];
