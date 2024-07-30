import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = false;

  switchedMode() {
    this.isLogin = !this.isLogin;
  }
}
