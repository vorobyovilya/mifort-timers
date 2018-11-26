import {Component, Input, OnInit, ChangeDetectionStrategy, SimpleChanges, OnChanges} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-onpush-timer',
  templateUrl: './onpush-timer.component.html',
  styleUrls: ['./onpush-timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushTimerComponent implements OnInit, OnChanges {

  @Input() addValue;
  private onPushTimerCounter: number = 200;
  public secondsCounter = interval(1000);

  ngOnInit() {
    this.tick();
  }

  tick(): void {
    this.secondsCounter.subscribe(() => {
      if (this.onPushTimerCounter > 0) this.onPushTimerCounter--;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onPushTimerCounter += this.addValue.value;
  }
}
