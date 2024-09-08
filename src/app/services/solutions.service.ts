import { Injectable, signal } from '@angular/core';
import { Solution } from '../interfaces/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  solutions = signal<Solution[]>([
    {
      name: 'Soporte IBM',
      description: 'Soporte técnico especializado y mantenimiento preventivo.',
      icon: 'dns',
      id: 'ibmSupport'
    },
    {
      name: 'Licenciamiento de Software',
      description: 'Brindamos asesoría experta en la selección y adquisición de licencias.',
      icon: 'install_desktop',
      id: 'license'
    },
    {
      name: 'Servicios Adm. de Cómputo',
      description: 'Proporcionamos soluciones integrales de infraestructura tecnológica.',
      icon: 'concierge',
      id: 'infrastructure'
    },
    {
      name: 'Cómputo en la Nube',
      description: 'Facilitamos la transición y aprovechamiento de la nube.',
      icon: 'cloud',
      id: 'cloud'
    }
  ]);

  constructor() { }

  me() {
    return this.solutions();
  }
}
