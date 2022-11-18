import { TestBed } from '@angular/core/testing';

import { NgCdkService } from './ng-cdk.service';

describe('NgCdkService', () => {
  let service: NgCdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
