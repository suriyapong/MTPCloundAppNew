import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Material 4
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdListModule, MdChipsModule, MdDialogModule, MdSidenavModule, MdSnackBarModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Rounter
import { RouterModule, Routes } from '@angular/router';

//map
import { AgmCoreModule } from '@agm/core';

//chart
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PuppyPageComponent } from './puppy-page/puppy-page.component';

import { MTPService } from './Repository/MTPService';
import { OwinAuthService } from './Repository/OwinAuthService';
import { StationPageComponent } from './station-page/station-page.component';
import { SensorPageComponent } from './sensor-page/sensor-page.component';
import { GraphPageComponent } from './graph-page/graph-page.component';

//Rounter
const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Station', component: StationPageComponent },
  { path: 'Sensor/:stationCode', component: SensorPageComponent },
  { path: 'Graph/:sensorCode', component: GraphPageComponent },
  { path: 'puppy', component: PuppyPageComponent },


  { path: '**', component: AppComponent } //กรณีไม่พบในสองตัวบนจะแสดงหน้า default
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

    //Material
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    ChartsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // MdInputModule,
    // MdListModule,
    // MdChipsModule,
    // MdDialogModule,
    // MdMenuModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdIconModule,
    // MdSidenavModule,
    // MdSnackBarModule,

    //Rounter
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANhM5M1lypVDKdvxA166K2RYkkdtQD2Tg'
    }),
  ],
  //Injectable ใส่ใน provider เป็น array, array2 เป็น service ตัวกลางที่เรียกใช่ร่วมกัน
  providers: [OwinAuthService, MTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
