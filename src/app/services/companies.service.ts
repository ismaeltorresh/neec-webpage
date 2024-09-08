import { Injectable } from '@angular/core';
import { Companies } from '../interfaces/companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  me(): Companies {
    return {
      name: 'Cosmobit SA de CV',
      nameComercial: 'CONSMOBIT',
      id: 'COS830311ABC',
      logoUrl: 'test'
    }
  }

  constructor() { }
}
