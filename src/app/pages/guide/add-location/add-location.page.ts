import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  title = "Dux | Add Locations";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
