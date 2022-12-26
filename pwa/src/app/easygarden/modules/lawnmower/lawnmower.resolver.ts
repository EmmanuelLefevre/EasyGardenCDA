import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { LawnmowerService } from './lawnmower.service';
import { DataUserModel } from 'src/app/_models/userModel';


@Injectable({
  providedIn: 'root'
})

export class LawnmowerResolver implements Resolve<DataUserModel[]> {

  constructor(private lawnmowerService: LawnmowerService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataUserModel[]> {
    return this.lawnmowerService.getAllLawnmowers().pipe(
      delay(1000),
      catchError(
        () => {
          this.router.navigate([""]);
          return throwError(() => ('Aucune donnée n\'a été trouvée.'))
        }
      )
    );
  }

}
