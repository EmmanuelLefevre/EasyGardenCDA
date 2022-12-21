import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { throwError } from 'rxjs';

import { TokenService } from '../auth/token.service';

@Injectable({
  providedIn: 'root'
})

export class DecodedTokenService {

  constructor(private tokenService: TokenService) { }

  emailDecoded() {
    const token = this.tokenService.getToken()
    if (token) {
      type tokenInfoModel = JwtPayload & { email: string }
      jwtDecode<tokenInfoModel>(token, { header: true })
      const object = JSON.parse(atob(token.split('.')[1]))
      const data = object['email']
      const explode = data.substring(0, data.indexOf('@'))
      const email = explode.charAt(0).toUpperCase() + explode.slice(1)
      return email
    }
    return throwError(() => ('Token not found'))
  }

}
