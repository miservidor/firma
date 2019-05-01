import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { FirmaComponent } from './firma/firma.component';

@NgModule({
  declarations: [
    AppComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
