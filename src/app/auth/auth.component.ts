import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, SignupResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  switchedMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    let responsePayload$: Observable<SignupResponseData>;

    if (this.isLogin) {
      responsePayload$ = this.authService.loginUser(
        form.value.email,
        form.value.password
      );
    } else {
      responsePayload$ = this.authService.signUpUser(
        form.value.email,
        form.value.password
      );
    }

    responsePayload$.subscribe(
      (responsePayload) => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);

        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
