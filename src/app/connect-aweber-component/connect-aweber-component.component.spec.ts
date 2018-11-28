import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAWeberComponentComponent } from './connect-aweber-component.component';

describe('ConnectAWeberComponentComponent', () => {
  let component: ConnectAWeberComponentComponent;
  let fixture: ComponentFixture<ConnectAWeberComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectAWeberComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAWeberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
