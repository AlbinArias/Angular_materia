import { TestBed } from '@angular/core/testing';

import { ServiceestudianteService } from './serviceestudiante.service';

describe('ServiceestudianteService', () => {
  let service: ServiceestudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceestudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
