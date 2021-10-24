import { TestBed } from '@angular/core/testing';

import { ServicedocenteService } from './servicedocente.service';

describe('ServicedocenteService', () => {
  let service: ServicedocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
