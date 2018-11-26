import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DefaultTimerComponent } from './default-timer/default-timer.component';
import { OnpushTimerComponent } from './onpush-timer/onpush-timer.component';
import { ChangeDetectorTimerComponent } from './change-detector-timer/change-detector-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultTimerComponent,
    OnpushTimerComponent,
    ChangeDetectorTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
