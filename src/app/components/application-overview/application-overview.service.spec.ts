import { TestBed } from '@angular/core/testing';

import { ApplicationOverviewService } from './application-overview.service';

describe('ApplicationOverviewService', () => {
  let service: ApplicationOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
