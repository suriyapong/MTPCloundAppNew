import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MTPService } from '../Repository/MTPService';
import { JSensor } from '../Models/JSensor';
import { JGraph } from '../Models/JGraph';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.css']
})
export class GraphPageComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  private sensorCode: string;
  private sensorName: string;
  private sensor: JSensor;

  private graph1D: JGraph;

  public lineChartData: Array<any> = [{ data: [], label: "" },];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = { responsive: true };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private route: ActivatedRoute, private mtp: MTPService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sensorCode = params['sensorCode'];

      this.mtp.GetSensorDetailBySensorCode(this.sensorCode).subscribe(
        (datasensor) => { this.sensor = datasensor; this.sensorCode = datasensor.SensorCode; this.sensorName = datasensor.SensorType }
      );
    });

    this.RenderCraph1D();
  }

  public RenderCraph1D(): void {
    this.mtp.GetGraph1D(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;

        this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }

  public RenderCraph2D(): void {
    this.mtp.GetGraph2D(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;
        this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }

  public RenderCraph3D(): void {
    this.mtp.GetGraph3D(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;
        this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }

  public RenderCraph5D(): void {
    this.mtp.GetGraph5D(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;
        this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }

  public RenderCraphWk(): void {
    this.mtp.GetGraphWk(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;
      this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }

  public RenderCraph2Wk(): void {
    this.mtp.GetGraph2Wk(this.sensorCode).subscribe(
      (graph) => {
        this.lineChartData = [{ data: graph.y, label: graph.Label },];
        this.lineChartLabels = graph.x;
        this.chart.chart.config.data.labels = this.lineChartLabels;
      }
    );
  }
}
