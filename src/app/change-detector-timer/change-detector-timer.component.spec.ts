import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorTimerComponent } from './change-detector-timer.component';

describe('ChangeDetectorTimerComponent', () => {
  let component: ChangeDetectorTimerComponent;
  let fixture: ComponentFixture<ChangeDetectorTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectorTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectorTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
