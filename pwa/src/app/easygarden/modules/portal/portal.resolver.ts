import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { PortalService } from './portal.service';
import { IDataPortal } from './portalModel';


@Injectable({
  providedIn: 'root'
})

export class PortalResolver implements Resolve<IDataPortal[]> {

  constructor(private portalService: PortalService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDataPortal[]> {
    return this.portalService.getAllPortals().pipe(
      delay(600),
      catchError(
        () => {
          this.router.navigate([""]);
          return throwError(() => ('Aucun portail n\'a été trouvé.'))
        }
      )
    );
  }

}
