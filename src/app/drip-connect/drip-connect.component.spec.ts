import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DripConnectComponent } from './drip-connect.component';

describe('DripConnectComponent', () => {
  let component: DripConnectComponent;
  let fixture: ComponentFixture<DripConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DripConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DripConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
