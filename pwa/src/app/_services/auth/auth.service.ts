import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CredentialsModel } from '../../_models/credentialsModel';
import { TokenModel } from '../../_models/tokenModel';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  logIn(credentials: CredentialsModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(environment.apis.login.url, credentials)
  }
  
}
