import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { OwinAuthService } from './OwinAuthService'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JUser } from '../Models/JUser';
import { JStation } from '../Models/JStation';
import { JSensor } from '../Models/JSensor';
import { JGraph } from '../Models/JGraph';

@Injectable()
export class MTPService {
  baseUrl = 'http://mtpdb.ddnsthai.com/mtpcloud';

  constructor(private http: Http, private owin: OwinAuthService) {
    this.owin.SetBaseUrl(this.baseUrl);
  }

  public Login(userName: string, password: string): Observable<string> {
    return this.owin.SignIn(userName, password);
  }
  public LogOut(): Observable<Boolean> {
    return this.owin.SignOut();
  }
  public Register(email: string, password: string, confirmPassword: string): Observable<boolean> {
    return this.owin.SignUp(email, password, confirmPassword);
  }

  public GetUserName(): string {
    return this.owin.GetUserName();
  }

  public GetProfileByUserName(userName: string): Observable<JUser> {
    let url = this.baseUrl + "/api/User/Profile?userName=" + userName;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JUser);
  }

  public ListStationByUserName(userName: string): Observable<Array<JStation>> {
    let url = this.baseUrl + '/api/Station/ListByUserName?userName=' + userName;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as Array<JStation>);
  }

  public GetStationDetailByStationCode(stationCode: string): Observable<JStation> {
    let url = this.baseUrl + '/api/station/Detail?stationCode=' + stationCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JStation);
  }

  public ListSensorByStationCode(stationCode: string): Observable<Array<JSensor>> {
    let url = this.baseUrl + '/api/Sensor/ListByStationCode?stationCode=' + stationCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as Array<JSensor>);
  }

  public GetSensorDetailBySensorCode(sensorCode: string): Observable<JSensor> {
    let url = this.baseUrl + '/api/Sensor/Detail?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JSensor);
  }

  public GetGraph1D(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/Graph1D?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }

  public GetGraph2D(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/Graph2D?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }

  public GetGraph3D(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/Graph3D?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }

  public GetGraph5D(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/Graph5D?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }

  public GetGraphWk(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/GraphWk?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }

  public GetGraph2Wk(sensorCode: string): Observable<JGraph> {
    let url = this.baseUrl + '/api/Sensor/Graph2Wk?sensorCode=' + sensorCode;
    let body = '';
    let headers = this.owin.GenerateHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(response => response.json() as JGraph);
  }
}
