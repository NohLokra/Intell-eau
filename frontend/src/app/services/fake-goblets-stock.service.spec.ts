import { TestBed, inject } from '@angular/core/testing';

import { FakeGobletsStockService } from './fake-goblets-stock.service';

describe('FakeGobletsStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeGobletsStockService]
    });
  });

  it('should be created', inject([FakeGobletsStockService], (service: FakeGobletsStockService) => {
    expect(service).toBeTruthy();
  }));
});
