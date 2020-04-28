import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InnerlayoutComponent } from './innerlayout/innerlayout.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    routingComponents,
    InnerlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  //  NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
