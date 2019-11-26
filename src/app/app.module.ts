import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GbAlertsModule } from 'gb-alerts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GbAlertsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
