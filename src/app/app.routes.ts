import { Routes } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { SomosComponent } from './screens/somos/somos.component';

export const routes: Routes = [
  {path:'somos', component: SomosComponent,  },
  {path:'**', component: LandingComponent,  },
];
