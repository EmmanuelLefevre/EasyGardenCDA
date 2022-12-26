import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { PortalService } from './portal.service';
import { DataUserModel } from 'src/app/_models/userModel';


@Injectable({
  providedIn: 'root'
})

export class PortalResolver implements Resolve<DataUserModel[]> {

  constructor(private portalService: PortalService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataUserModel[]> {
    return this.portalService.getAllPortals().pipe(
      delay(1000),
      catchError(
        () => {
          this.router.navigate([""]);
          return throwError(() => ('Aucun portail n\'a été trouvé.'))
        }
      )
    );
  }

}
