import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.page.html',
  styleUrls: ['./add-packages.page.scss'],
})
export class AddPackagesPage implements OnInit {

  title = "Dux | Add Packages";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
