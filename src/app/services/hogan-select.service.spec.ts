import { TestBed, inject } from '@angular/core/testing';

import { HoganSelectService } from './hogan-select.service';

describe('HoganSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoganSelectService]
    });
  });

  it('should be created', inject([HoganSelectService], (service: HoganSelectService) => {
    expect(service).toBeTruthy();
  }));
});
