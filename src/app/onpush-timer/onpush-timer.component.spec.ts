import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushTimerComponent } from './onpush-timer.component';

describe('OnpushTimerComponent', () => {
  let component: OnpushTimerComponent;
  let fixture: ComponentFixture<OnpushTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
