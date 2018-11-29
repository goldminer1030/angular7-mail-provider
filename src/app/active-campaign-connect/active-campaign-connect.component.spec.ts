import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCampaignConnectComponent } from './active-campaign-connect.component';

describe('ActiveCampaignConnectComponent', () => {
  let component: ActiveCampaignConnectComponent;
  let fixture: ComponentFixture<ActiveCampaignConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCampaignConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCampaignConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
