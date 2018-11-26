import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() changeAddValue: EventEmitter<number> = new EventEmitter<number>();

  sendChange(value: number): void {
    this.changeAddValue.emit(value);
  }


}
