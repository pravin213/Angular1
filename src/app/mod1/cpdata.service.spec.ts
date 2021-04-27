import { TestBed } from '@angular/core/testing';

import { CpdataService } from './cpdata.service';

describe('CpdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpdataService = TestBed.get(CpdataService);
    expect(service).toBeTruthy();
  });
});
