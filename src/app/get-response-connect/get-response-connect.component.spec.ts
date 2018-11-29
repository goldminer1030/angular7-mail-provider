import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResponseConnectComponent } from './get-response-connect.component';

describe('GetResponseConnectComponent', () => {
  let component: GetResponseConnectComponent;
  let fixture: ComponentFixture<GetResponseConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResponseConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResponseConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
