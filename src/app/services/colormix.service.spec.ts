import { TestBed } from '@angular/core/testing';

import { ColormixService } from './colormix.service';

describe('ColormixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColormixService = TestBed.get(ColormixService);
    expect(service).toBeTruthy();
  });
});
