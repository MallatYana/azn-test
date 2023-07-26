import { TestBed } from '@angular/core/testing';

import { UserApiClientService } from './user-api-client.service';

describe('UserApiClientService', () => {
  let service: UserApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
