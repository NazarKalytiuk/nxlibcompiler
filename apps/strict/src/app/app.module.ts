import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MylibModule } from '@stricttest/mylib';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MylibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
