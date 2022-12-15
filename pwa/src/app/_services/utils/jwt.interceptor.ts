import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { TokenService } from '../../_services/auth/token.service';


@Injectable({
  providedIn: 'root'
})

export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.tokenService.getToken()

    // SI token à insérer dans le header
    if(token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+token)
      })
      return next.handle(clone).pipe(
        catchError(error => {
          if(error.status === 401){
            this.tokenService.clearTokenExpired()
          }
          return throwError(() => new error('Session Expired'))
        })
      )
    }
    
    return next.handle(request)

    // .pipe(
    //   tap(event => {
    //     if (event instanceof HttpResponse) {
    //       this.snackBar.openSnackBar(event.statusText,'Close','green-snackbar');
    //       // this.apiStatusCodeService.sendCode(event.status.code)
    //       // http response status code
    //       console.log(event.status);
    //     }
    //   }));
  }

}

export const JWTInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
}
