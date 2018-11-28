import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMailchimpComponentComponent } from './connect-mailchimp-component.component';

describe('ConnectMailchimpComponentComponent', () => {
  let component: ConnectMailchimpComponentComponent;
  let fixture: ComponentFixture<ConnectMailchimpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectMailchimpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectMailchimpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
