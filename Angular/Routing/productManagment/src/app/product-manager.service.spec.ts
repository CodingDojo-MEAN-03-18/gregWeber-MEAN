import { TestBed, inject } from '@angular/core/testing';

import { ProductManagerService } from './product-manager.service';

describe('ProductManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductManagerService]
    });
  });

  it('should be created', inject([ProductManagerService], (service: ProductManagerService) => {
    expect(service).toBeTruthy();
  }));
});
