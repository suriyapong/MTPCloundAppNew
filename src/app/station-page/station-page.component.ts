import { Component, OnInit } from '@angular/core';

//Router
import { Router } from '@angular/router';

//Route
import { ActivatedRoute } from '@angular/router';

//Material
import { MdSidenavContainer, MdListModule, MdCardModule, MdMenuModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { MTPService } from '../Repository/MTPService';
import { JStation } from '../Models/JStation';

@Component({
  selector: 'app-station-page',
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent implements OnInit {
  public title: string;
  public username: string;
  private listStations: Array<JStation>;

  constructor(private route: ActivatedRoute, private router: Router, private mtp: MTPService, public snackBar: MdSnackBar) { }

  dogs: Object[] = [
    { name: "Porter" },
    { name: "Mal" },
    { name: "Razzle" },
    { name: "Koby" },
    { name: "Molly" },
    { name: "Husi" }
  ];

  ngOnInit() {
    this.title = "Station";
    
    this.mtp.GetProfileByUserName(this.mtp.GetUserName()).subscribe(
      (user) => { },
      (error) => { },
      () => { }
    );

    this.mtp.ListStationByUserName(this.mtp.GetUserName()).subscribe(
      (listStation) => { this.listStations = listStation; }
    );
  }

  Logout() {
    this.mtp.LogOut().subscribe(
      (result) => {
        if (result) {
          this.NavigateToMainPage();
        }
      },
      (error) => { alert(JSON.stringify(error)) },
      () => { }
    )
  }

  NavigateToMainPage() {
    this.router.navigate(['Login']);
  }
}
