import { TestBed } from '@angular/core/testing';

import { MailchimpServiceService } from './mailchimp-service.service';

describe('MailchimpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailchimpServiceService = TestBed.get(MailchimpServiceService);
    expect(service).toBeTruthy();
  });
});
