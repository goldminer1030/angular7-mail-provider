import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AweberConnectComponent } from './aweber-connect.component';

describe('AweberConnectComponent', () => {
  let component: AweberConnectComponent;
  let fixture: ComponentFixture<AweberConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AweberConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AweberConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
