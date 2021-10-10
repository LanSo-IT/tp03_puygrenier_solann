import { TestBed } from '@angular/core/testing';

import { WebServiceProductService } from './web-service-product.service';

describe('WebServiceProductService', () => {
  let service: WebServiceProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
