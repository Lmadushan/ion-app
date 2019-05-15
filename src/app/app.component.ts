import { Component, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/services/user/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy{
 
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
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

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

  ngOnDestroy(){
    localStorage.removeItem('user');
  }
}
