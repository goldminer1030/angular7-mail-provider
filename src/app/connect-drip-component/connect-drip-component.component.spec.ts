import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDripComponentComponent } from './connect-drip-component.component';

describe('ConnectDripComponentComponent', () => {
  let component: ConnectDripComponentComponent;
  let fixture: ComponentFixture<ConnectDripComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectDripComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDripComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
