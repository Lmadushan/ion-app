import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/user/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  title = "Dux | Profile";
  user: User = {
    uid: '',
    displayName: '',
    email: '',
    contact: '',
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
        this.user.contact = usr.contact;
        this.user.displayName = usr.displayName;
        this.user.emailVerified = usr.emailVerified;
        this.user.contact = usr.contact;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
  }

}
