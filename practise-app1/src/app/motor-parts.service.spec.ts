import { TestBed } from '@angular/core/testing';

import { MotorPartsService } from './motor-parts.service';

describe('MotorPartsService', () => {
  let service: MotorPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
