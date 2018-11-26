import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTimerComponent } from './default-timer.component';

describe('DefaultTimerComponent', () => {
  let component: DefaultTimerComponent;
  let fixture: ComponentFixture<DefaultTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
