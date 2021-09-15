import { TestBed } from '@angular/core/testing';

import { HardCodedAuthentificationService } from './hard-coded-authentification.service';

describe('HardCodedAuthentificationService', () => {
  let service: HardCodedAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
