import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-default-timer',
  templateUrl: './default-timer.component.html',
  styleUrls: ['./default-timer.component.css']
})
export class DefaultTimerComponent implements OnInit, OnChanges {

  @Input() addValue;
  private defaultTimerCounter: number = 100;
  public secondsCounter = interval(1000);

  ngOnInit() {
    this.tick();
  }

  tick(): void {
    this.secondsCounter.subscribe(() => {
      if (this.defaultTimerCounter > 0) this.defaultTimerCounter--;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.defaultTimerCounter += this.addValue.value;
  }
}
