import { Component, OnInit } from '@angular/core';

//Material 4
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//Router
import { Router } from '@angular/router';
import { MTPService } from '../Repository/MTPService';

import { JUser } from '../Models/JUser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public user: JUser;
  public username: string;
  public password: string;

  constructor(private router: Router, private mtp: MTPService) { }

  ngOnInit() {
  }

  Login() {
    this.mtp.Login(this.username, this.password).subscribe(
      (username) => { this.NavigateToMainPage(); },
      (error) => { alert(JSON.stringify(error)) },
      () => { }
    );
  }
  SignUp() {
    this.mtp.Register("tong9977@gmail.com", "Sinetong9977@", "Sinetong9977@").subscribe(
      (username) => { this.NavigateToMainPage(); },
      (error) => { alert(JSON.stringify(error)) },
      () => { }
    )
  }

  NavigateToMainPage() {
    this.router.navigate(['Station']);
  }
}
