import { TestBed, inject } from '@angular/core/testing';

import { WaterLevelService } from './water-level.service';

describe('WaterLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterLevelService]
    });
  });

  it('should be created', inject([WaterLevelService], (service: WaterLevelService) => {
    expect(service).toBeTruthy();
  }));
});
