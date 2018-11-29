import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantContractConnectComponent } from './constant-contract-connect.component';

describe('ConstantContractConnectComponent', () => {
  let component: ConstantContractConnectComponent;
  let fixture: ComponentFixture<ConstantContractConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantContractConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantContractConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
