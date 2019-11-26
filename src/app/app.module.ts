import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GbAlertsModule } from '@gavinb841/gb-alerts';

import { AppComponent } from './app.component';

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
