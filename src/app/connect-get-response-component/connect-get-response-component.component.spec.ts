import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGetResponseComponentComponent } from './connect-get-response-component.component';

describe('ConnectGetResponseComponentComponent', () => {
  let component: ConnectGetResponseComponentComponent;
  let fixture: ComponentFixture<ConnectGetResponseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectGetResponseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectGetResponseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
