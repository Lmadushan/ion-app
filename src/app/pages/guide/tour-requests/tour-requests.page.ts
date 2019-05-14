import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-requests',
  templateUrl: './tour-requests.page.html',
  styleUrls: ['./tour-requests.page.scss'],
})
export class TourRequestsPage implements OnInit {

  title = "Dux | Tour Requests";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
