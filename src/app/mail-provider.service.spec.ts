import { TestBed } from '@angular/core/testing';

import { MailProviderService } from './mail-provider.service';

describe('MailProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailProviderService = TestBed.get(MailProviderService);
    expect(service).toBeTruthy();
  });
});
