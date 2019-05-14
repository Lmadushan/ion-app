import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-tourist',
  templateUrl: './register-tourist.page.html',
  styleUrls: ['./register-tourist.page.scss'],
})
export class RegisterTouristPage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
