import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ILawnmower, IDataLawnmower } from './lawnmowerModel';


@Injectable({
  providedIn: 'root'
})

export class LawnmowerService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lawnmowers
  getAllLawnmowers(): Observable<IDataLawnmower[]> {
    return this.httpClient.get<IDataLawnmower[]>(environment.apis.lawnmower.url);
  }

  // Add Lawnmower
  addLawnmower(lawnmower: ILawnmower) {
    const json = {
      name: lawnmower.name,
      garden: 'api/gardens/'+lawnmower.garden.id
    };
    return this.httpClient.post(environment.apis.lawnmower.url, json)
  }

  // Get Lawnmower
  getLawnmower(lid: string | null): Observable<ILawnmower>{
    return this.httpClient.get<ILawnmower>(environment.apis.lawnmower.url+'/'+lid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<IDataLawnmower[]> {
    return this.httpClient.put<IDataLawnmower[]>(environment.apis.lawnmower.url+'/'+id, {status})
  }

  // Update Lawnmower
  updateLawnmower(lawnmower: ILawnmower, lid: string | null): Observable<IDataLawnmower[]> {
    return this.httpClient.put<IDataLawnmower[]>(environment.apis.lawnmower.url+'/'+lid, lawnmower)
  }

  // Delete Lawnmower
  deleteLawnmower(id: number): Observable<ILawnmower> {
    return this.httpClient.delete<ILawnmower>(environment.apis.lawnmower.url+'/'+id)
  }

}
