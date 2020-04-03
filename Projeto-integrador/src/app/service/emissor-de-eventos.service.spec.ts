import { TestBed } from '@angular/core/testing';

import { EmissorDeEventosService } from './emissor-de-eventos.service';

describe('EmissorDeEventosService', () => {
  let service: EmissorDeEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmissorDeEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
