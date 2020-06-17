import { TestBed } from '@angular/core/testing';

import { BulletPointService } from './bullet-point.service';

describe('BulletPointService', () => {
  let service: BulletPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
