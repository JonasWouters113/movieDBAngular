import { TestBed } from '@angular/core/testing';

import { OwnApiService } from './own-api.service';

describe('OwnApiService', () => {
  let service: OwnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
