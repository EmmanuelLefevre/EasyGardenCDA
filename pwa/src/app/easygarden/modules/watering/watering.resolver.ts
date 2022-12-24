import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { WateringService } from './watering.service';
import { DataUserModel } from 'src/app/_models/userModel';


@Injectable({
  providedIn: 'root'
})

export class WateringResolver implements Resolve<DataUserModel[]> {

  constructor(private wateringService: WateringService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataUserModel[]> {
    return this.wateringService.getAllWaterings().pipe(
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
