import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: CustomerService = TestBed.inject(CustomerService);
    expect(service).toBeTruthy();
  });
});
