import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location/location.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from 'src/app/shared/services/location/location';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  title = "Dux | Add Locations";
  locations: Location[];
  paramsSubscription: any;

  constructor(private route: ActivatedRoute, public locationService: LocationService, public authService: AuthService) { }


  getLoc() {
    const loc = JSON.parse(localStorage.getItem('locations'));
    this.locations = loc; 
  }

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.getLoc();
      this.locationService.getLocation().subscribe( locations => {
        this.locations = locations;
        localStorage.setItem('locations', JSON.stringify(locations));
      });
    });

 }
}
