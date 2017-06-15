import { Component, OnInit } from '@angular/core';

//Route
import { ActivatedRoute } from '@angular/router';

//Repo
import { MTPService } from '../Repository/MTPService';

//Model
import { JSensor } from '../Models/JSensor';
import { JStation } from '../Models/JStation';

//Material
import { MdChipsModule } from '@angular/material';


@Component({
  selector: 'app-sensor-page',
  templateUrl: './sensor-page.component.html',
  styleUrls: ['./sensor-page.component.css']
})

export class SensorPageComponent implements OnInit {

  private stationCode: string;
  private stationName: string;
  private station: JStation;


  private listSensors: Array<JSensor>;

  constructor(private route: ActivatedRoute, private mtp: MTPService) { }

  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stationCode = params['stationCode'];

      this.mtp.GetStationDetailByStationCode(this.stationCode).subscribe(
        (stationData) => { this.station = stationData; this.stationName = stationData.StationName }
      )

      this.mtp.ListSensorByStationCode(this.stationCode).subscribe(
        (listSensor) => { this.listSensors = listSensor; }
      );
    });
  }
}
