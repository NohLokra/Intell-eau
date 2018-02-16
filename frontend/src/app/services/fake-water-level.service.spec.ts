import { TestBed, inject } from '@angular/core/testing';

import { FakeWaterLevelService } from './fake-water-level.service';

describe('FakeWaterLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeWaterLevelService]
    });
  });

  it('should be created', inject([FakeWaterLevelService], (service: FakeWaterLevelService) => {
    expect(service).toBeTruthy();
  }));
});
