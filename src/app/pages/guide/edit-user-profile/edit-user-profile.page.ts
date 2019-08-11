import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { User } from 'src/app/shared/services/user/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.page.html',
  styleUrls: ['./edit-user-profile.page.scss'],
})
export class EditUserProfilePage implements OnInit {
  title = "Dux | Edit Profile";
  user: User = {
    uid: '',
    displayName: '',
    email: '',
    contact: '',
    emailVerified: true,
    photoURL: '',
    roles: {
      guide: true,
    }
  };
  constructor(
    public authService: AuthService,
    public router: Router,
    public firestore: AngularFirestore
    ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(usr => {
      if (usr) {
        localStorage.setItem('user', JSON.stringify(usr));
        this.user.roles.guide = usr.roles.guide;
        this.user.displayName = usr.displayName;
        this.user.contact = usr.contact;
        this.user.emailVerified = usr.emailVerified;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
  }

  editProfile() {
    
    this.firestore.doc('users/'+this.user.uid).update(this.user);
    console.log(this.user);
    window.alert('Changes Saved!');
    this.router.navigate(['/user-profile']);
  }

}
