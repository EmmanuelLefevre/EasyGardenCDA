import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CredentialsModel } from '../../_models/credentialsModel';
import { UserModel } from '../../_models/userModel';
import { TokenModel } from '../../_models/tokenModel';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  logIn(credentials: CredentialsModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(environment.apis.login.url, credentials)
  }

  registerIn(user: UserModel) {
    const profile = {
      email: user.email,
      password: user.password,
      plainPassword: user.password,
      lastName: user.lastName,
      firstName: user.firstName,
      pseudo: user.pseudo,
      phoneNumber: user.phoneNumber,
      createdAt: new Date(),
      isVerified: false
    };
    return this.httpClient.post(environment.apis.user.url, profile)
  }
  
}
