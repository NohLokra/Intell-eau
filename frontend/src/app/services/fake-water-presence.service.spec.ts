import { TestBed, inject } from '@angular/core/testing';

import { FakeWaterPresenceService } from './fake-water-presence.service';

describe('FakeWaterPresenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeWaterPresenceService]
    });
  });

  it('should be created', inject([FakeWaterPresenceService], (service: FakeWaterPresenceService) => {
    expect(service).toBeTruthy();
  }));
});
