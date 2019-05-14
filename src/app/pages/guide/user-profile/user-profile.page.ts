import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  title = "Dux | Profile";
  role = "guide";
  constructor() { }

  ngOnInit() {
  }

}
