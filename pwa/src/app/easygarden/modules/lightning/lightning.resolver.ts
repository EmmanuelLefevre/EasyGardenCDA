import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { LightningService } from './lightning.service';
import { DataUserModel } from 'src/app/_models/userModel';


@Injectable({
  providedIn: 'root'
})

export class LightningResolver implements Resolve<DataUserModel[]> {
  
  constructor(private lightningService: LightningService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataUserModel[]> {
    return this.lightningService.getAllLightnings().pipe(
      delay(1200),
      catchError(
        () => {
          this.router.navigate([""]);
          return throwError(() => ('Aucune donnée n\'a été trouvée.'))
        }
      )
    );
  }
  
}