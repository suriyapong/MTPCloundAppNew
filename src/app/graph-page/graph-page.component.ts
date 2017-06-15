import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MTPService } from '../Repository/MTPService';
import { JSensor } from '../Models/JSensor';
import { JGraph } from '../Models/JGraph';

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.css']
})
export class GraphPageComponent implements OnInit {
  // lineChart
  public lineChartData: Array<any> = [{ data: [65, 59, 80, 81, 56, 55, 40], label: "A" },];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = { responsive: true };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  private sensorCode: string;
  private sensorName: string;
  private sensor: JSensor;

  private graph1D: JGraph;

  constructor(private route: ActivatedRoute, private mtp: MTPService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sensorCode = params['sensorCode'];

      this.mtp.GetSensorDetailBySensorCode(this.sensorCode).subscribe(
        (datasensor) => { this.sensor = datasensor; this.sensorCode = datasensor.SensorCode; this.sensorName = datasensor.SensorType }
      );

      this.mtp.GetGraph1D(this.sensorCode).subscribe(
        (graph) => { this.graph1D = graph; }
      );
    });
  }

  public Render(): void {
    this.lineChartData = [{ data: this.graph1D.y, label: this.graph1D.Label },];
    this.lineChartLabels = ['January1', 'February', 'March', 'April', 'May', 'June', 'July'];
  }
}
