import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user/user';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User = {
    uid: '',
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    roles: {
      guide: false,
      tourist: false,
    }
  };
  constructor(
    public authService: AuthService
  ) { }

  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  ngOnInit() {
    this.authService.getUser().subscribe(usr => {
      if (usr) {
        localStorage.setItem('user', JSON.stringify(usr));
        this.user.roles.guide = usr.roles.guide;
        this.user.roles.tourist = usr.roles.tourist;
        this.user.displayName = usr.displayName;
        this.user.emailVerified = usr.emailVerified;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
  }

}
