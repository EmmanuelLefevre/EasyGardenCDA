import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, throwError, delay } from 'rxjs';

import { PoolService } from './pool.service';
import { DataUserModel } from 'src/app/_models/userModel';


@Injectable({
  providedIn: 'root'
})

export class PoolResolver implements Resolve<DataUserModel[]> {

  constructor(private poolService: PoolService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataUserModel[]> {
    
    return this.poolService.getAllPools().pipe(
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
