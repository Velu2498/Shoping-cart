import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Com1Component } from './com1/com1.component';
// import { Com2Component } from './com2/com2.component';
// import { Com3Component } from './com3/com3.component';
// import { Com4Component } from './com4/com4.component';
// import { Com5Component } from './com5/com5.component';
import { FormsModule } from '@angular/forms';
import { ShopsComponent } from './shops/shops.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    // Com1Component,
    // Com2Component,
    // Com3Component,
    // Com4Component,
    // Com5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
