import { TestBed } from '@angular/core/testing';

import { OpenbankService } from './openbank.service';

describe('OpenbankService', () => {
  let service: OpenbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
