import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectActiveCampaignComponentComponent } from './connect-active-campaign-component.component';

describe('ConnectActiveCampaignComponentComponent', () => {
  let component: ConnectActiveCampaignComponentComponent;
  let fixture: ComponentFixture<ConnectActiveCampaignComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectActiveCampaignComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectActiveCampaignComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
