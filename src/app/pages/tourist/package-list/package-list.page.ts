import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.page.html',
  styleUrls: ['./package-list.page.scss'],
})
export class PackageListPage implements OnInit {
  title="Dux | Packages";
  constructor() { }

  ngOnInit() {
  }

}
