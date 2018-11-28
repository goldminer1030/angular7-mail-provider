import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectConstantContractComponentComponent } from './connect-constant-contract-component.component';

describe('ConnectConstantContractComponentComponent', () => {
  let component: ConnectConstantContractComponentComponent;
  let fixture: ComponentFixture<ConnectConstantContractComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectConstantContractComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectConstantContractComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
