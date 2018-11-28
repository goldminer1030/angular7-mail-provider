import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailchimpAuthComponentComponent } from './mailchimp-auth-component.component';

describe('MailchimpAuthComponentComponent', () => {
  let component: MailchimpAuthComponentComponent;
  let fixture: ComponentFixture<MailchimpAuthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailchimpAuthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailchimpAuthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
