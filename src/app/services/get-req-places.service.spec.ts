import { TestBed } from '@angular/core/testing';

import { GetReqPlaces } from './get-req-places.service';

describe('GetReqPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetReqPlaces = TestBed.get(GetReqPlaces);
    expect(service).toBeTruthy();
  });
});
