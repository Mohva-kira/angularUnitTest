import { TestBed } from '@angular/core/testing';

import { FirsServiceService } from './firs-service.service';

describe('FirsServiceService', () => {
  let service: FirsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post in an array", () => {
    const qouteText = "This is my first post";
    service.addNewServ(qouteText);
    expect(service.serviceList.length).toBeGreaterThanOrEqual(1);
  });

  it("should remove a created post from the array of posts", () => {
    service.addNewServ("This is my first post");
    service.removeService(0);
    expect(service.serviceList.length).toBeLessThan(1);
  });
});

