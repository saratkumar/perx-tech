import { TestBed } from '@angular/core/testing';

import { RespositoryService } from './respository.service';

describe('RespositoryService', () => {
  let service: RespositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
