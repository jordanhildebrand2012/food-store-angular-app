import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface SignupResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  signUpUser(email: string, password: string) {
    return this.http
      .post<SignupResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUKdxFBJhND3vQWBCZedZ0klGc0dlmimw',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((respondData) => {
          this.handleUserAuthentication(respondData);
        })
      );
  }

  loginUser(email: string, password: string) {
    return this.http
      .post<SignupResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUKdxFBJhND3vQWBCZedZ0klGc0dlmimw',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((respondData) => {
          this.handleUserAuthentication(respondData);
        })
      );
  }

  private handleUserAuthentication(respondData) {
    const tokenExpirationDate = new Date(
      new Date().getTime() + +respondData.expiresIn * 1000
    );

    const user = new User(
      respondData.email,
      respondData.localId,
      respondData.idToken,
      tokenExpirationDate
    );

    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'You have entered wrong credentials';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
    }

    return throwError(errorMessage);
  }
}