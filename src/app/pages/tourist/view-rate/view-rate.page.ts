import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/shared/services/rate/rate.service';
import { Rate } from 'src/app/shared/services/rate/rate';

@Component({
  selector: 'app-view-rate',
  templateUrl: './view-rate.page.html',
  styleUrls: ['./view-rate.page.scss'],
})
export class ViewRatePage implements OnInit {
  title = "Dux | Rate";
  rates: Rate[];
  constructor(public rateService: RateService) { }

  ngOnInit() {

    this.rateService.getLocation().subscribe(rates => {
      this.rates = rates;
      localStorage.setItem('locations', JSON.stringify(rates));
    });
  }

}
