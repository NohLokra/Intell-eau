import { TestBed, inject } from '@angular/core/testing';

import { WaterPresenceService } from './water-presence.service';

describe('WaterPresenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterPresenceService]
    });
  });

  it('should be created', inject([WaterPresenceService], (service: WaterPresenceService) => {
    expect(service).toBeTruthy();
  }));
});
