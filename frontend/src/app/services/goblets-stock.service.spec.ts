import { TestBed, inject } from '@angular/core/testing';

import { GobletsStockService } from './goblets-stock.service';

describe('GobletsStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GobletsStockService]
    });
  });

  it('should be created', inject([GobletsStockService], (service: GobletsStockService) => {
    expect(service).toBeTruthy();
  }));
});
