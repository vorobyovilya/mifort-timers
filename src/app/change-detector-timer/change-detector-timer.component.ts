import {Component, Input, OnInit, SimpleChanges, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-change-detector-timer',
  templateUrl: './change-detector-timer.component.html',
  styleUrls: ['./change-detector-timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorTimerComponent implements OnInit, OnChanges {

  @Input() addValue: { value: number };
  private changeDetectorTimerCounter = 300;
  private detectChangesCounter = 0;
  private showInterval: number = 2;
  public secondsCounter = interval(1000);

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.tick();
  }

  tick(): void {
    this.secondsCounter.subscribe(() => {
      if (this.changeDetectorTimerCounter > 0) {
        this.changeDetectorTimerCounter--;
        this.detectChangesCounter++;
      }
      if (this.detectChangesCounter === this.showInterval) {
        this.cdr.detectChanges();
        this.detectChangesCounter = 0;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectorTimerCounter += this.addValue.value;
  }
}
