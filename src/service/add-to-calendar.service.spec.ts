import { TestBed, inject } from '@angular/core/testing';

import { AddToCalendarService } from './add-to-calendar.service';

describe('AddToCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToCalendarService]
    });
  });

  it('should create service', inject([AddToCalendarService], (service: AddToCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
