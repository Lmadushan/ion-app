import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-guide',
  templateUrl: './register-guide.page.html',
  styleUrls: ['./register-guide.page.scss'],
})
export class RegisterGuidePage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
