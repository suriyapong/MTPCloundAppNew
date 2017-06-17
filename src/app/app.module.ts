import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PuppyPageComponent } from './puppy-page/puppy-page.component';

import { MTPService } from './Repository/MTPService';
import { OwinAuthService } from './Repository/OwinAuthService';
import { StationPageComponent } from './station-page/station-page.component';
import { SensorPageComponent } from './sensor-page/sensor-page.component';
import { GraphPageComponent } from './graph-page/graph-page.component';

const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Station', component: StationPageComponent },
  { path: 'Sensor/:stationCode', component: SensorPageComponent },
  { path: 'Graph/:sensorCode', component: GraphPageComponent },
  { path: 'puppy', component: PuppyPageComponent },

  { path: '**', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PuppyPageComponent,
    StationPageComponent,
    SensorPageComponent,
    GraphPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    ChartsModule,

    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANhM5M1lypVDKdvxA166K2RYkkdtQD2Tg'
    }),
  ],

  providers: [OwinAuthService, MTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
