import { Routes } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { SomosComponent } from './screens/somos/somos.component';
import { DefaultComponent } from './frames/default/default.component';

export const routes: Routes = [
  {path:'', component: DefaultComponent, children: [
    {path:'somos', component: SomosComponent},
    {path: '', component: LandingComponent}
  ]},
];
