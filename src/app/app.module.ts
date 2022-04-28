import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InterpolationdemoComponent } from './interpolationdemo/interpolationdemo.component';
import { PropertydemoComponent } from './propertydemo/propertydemo.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { TwowaydemoComponent } from './twowaydemo/twowaydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationdemoComponent,
    PropertydemoComponent,
    EventdemoComponent,
    TwowaydemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
