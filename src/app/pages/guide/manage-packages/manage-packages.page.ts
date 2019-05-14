import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.page.html',
  styleUrls: ['./manage-packages.page.scss'],
})
export class ManagePackagesPage implements OnInit {

  title = "Dux | Manage Packages";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
