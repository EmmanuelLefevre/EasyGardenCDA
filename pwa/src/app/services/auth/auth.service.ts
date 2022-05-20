import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CredentialsModel } from '../../models/credentialsModel';
import { TokenModel } from '../../models/tokenModel';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  logIn(credentials: CredentialsModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(environment.apis.login.url, credentials)
  }
  
}
