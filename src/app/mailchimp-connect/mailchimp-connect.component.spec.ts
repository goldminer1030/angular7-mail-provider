import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailchimpConnectComponent } from './mailchimp-connect.component';

describe('MailchimpConnectComponent', () => {
  let component: MailchimpConnectComponent;
  let fixture: ComponentFixture<MailchimpConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailchimpConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailchimpConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
