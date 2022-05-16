import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginModel } from '../../models/loginModel';
import { RegisterModel } from '../../models/registerModel';
import { LocalStorageService } from './local-storage.service';

export declare type TokenResult = {
  access_token: string
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user !: LoginModel;

  constructor(private localStorage: LocalStorageService, private httpClient: HttpClient) { }

  getToken(): string | null {
    return this.localStorage.get('jwt_token');
  }

  logIn(user: LoginModel): Observable<LoginModel> {
    const profile = {
      email: user.email,
      password: user.password
    };

    return this.httpClient.post<TokenResult>(environment.apis.login.url, profile).pipe(
      map(item => {
        user.token = item.access_token;
        console.log(item.access_token);
        return user;
      }),
      tap(item => {
        this.user = item;
        this.localStorage.set('jwt_token', this.user.token);
      })
    );
  }

  registerIn(user: RegisterModel) {
    const profile = {
      email: user.email,
      password: user.password,
      plainPassword: user.password,
      lastName: user.lastName,
      firstName: user.firstName,
      pseudo: user.pseudo,
      phoneNumber: user.phoneNumber,
      // createdAt: "2022-05-17 01:31:36",
      // isVerified: true,
      // roles:["ROLE_USER"]
    };
    console.log(profile);

    return this.httpClient.post<TokenResult>(environment.apis.register.url, profile).pipe(
      map(item => {
        user.token = item.access_token;
        console.log(item.access_token);
        return user;
      }),
      tap(item => {
        this.user = item;
        this.localStorage.set('jwt_token', this.user.token);
      })
    );
  }

}
