import { Component, OnInit } from '@angular/core';

//Material
import { MaterialModule} from '@angular/material';

@Component({
  selector: 'app-puppy-page',
  templateUrl: './puppy-page.component.html',
  styleUrls: ['./puppy-page.component.css']
})
export class PuppyPageComponent implements OnInit {
  formShowing:boolean = false;

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "account_box"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate",
      icon: "pets"
    }
  ];

  dogs: Object[] = [
    { name: "Porter" },
    { name: "Mal" },
    { name: "Razzle" },
    { name: "Koby" },
    { name: "Molly" },
    { name: "Husi" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
