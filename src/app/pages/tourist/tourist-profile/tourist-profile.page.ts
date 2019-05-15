import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/user/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.page.html',
  styleUrls: ['./tourist-profile.page.scss'],
})
export class TouristProfilePage implements OnInit {

  title = "Dux | Profile";
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
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(usr => {
      if (usr) {
        localStorage.setItem('user', JSON.stringify(usr));
        this.user.roles.guide = usr.roles.guide;
        this.user.displayName = usr.displayName;
        this.user.emailVerified = usr.emailVerified;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
  }

}
