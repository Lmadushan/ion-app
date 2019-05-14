import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.page.html',
  styleUrls: ['./view-rating.page.scss'],
})
export class ViewRatingPage implements OnInit {

  title = "Dux | View Ratings";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
