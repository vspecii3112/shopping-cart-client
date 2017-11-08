import { TestBed, inject } from '@angular/core/testing';

import { Load.Coin.InfoService } from './load.coin.info.service';

describe('Load.Coin.InfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Load.Coin.InfoService]
    });
  });

  it('should be created', inject([Load.Coin.InfoService], (service: Load.Coin.InfoService) => {
    expect(service).toBeTruthy();
  }));
});
