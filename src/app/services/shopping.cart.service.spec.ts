import { TestBed, inject } from '@angular/core/testing';

import { Shopping.CartService } from './shopping.cart.service';

describe('Shopping.CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Shopping.CartService]
    });
  });

  it('should be created', inject([Shopping.CartService], (service: Shopping.CartService) => {
    expect(service).toBeTruthy();
  }));
});
