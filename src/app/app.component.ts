import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Timers';

  public addTimerValue: {value: number} = {value: 0};

  changeTimerValue(_value): void {
    this.addTimerValue = {value: _value};
  }
}
