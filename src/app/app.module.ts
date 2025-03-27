import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [],
})
export class AppModule {}
