import { TestBed } from '@angular/core/testing';

import { OnlineRacingManagerService } from './online-racing-manager.service';

describe('OnlineRacingManagerService', () => {
  let service: OnlineRacingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineRacingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
