import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LawnmowerModel, DataLawnmowerModel } from './lawnmowerModel';

@Injectable({
  providedIn: 'root'
})

export class LawnmowerService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lawnmowers
  getAllLawnmowers(): Observable<DataLawnmowerModel[]> {
    return this.httpClient.get<DataLawnmowerModel[]>(environment.apis.lawnmower.url);
  }

  // Get Lawnmower
  getLawnmower(lid: string | null): Observable<LawnmowerModel>{
    return this.httpClient.get<LawnmowerModel>(environment.apis.lawnmower.url+'/'+lid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataLawnmowerModel[]> {
    return this.httpClient.put<DataLawnmowerModel[]>(environment.apis.lawnmower.url+'/'+id, {status})
  }

  // Update Lawnmower
  updateLawnmower(lawnmower: LawnmowerModel, lid: string | null): Observable<DataLawnmowerModel[]> {
    return this.httpClient.put<DataLawnmowerModel[]>(environment.apis.lawnmower.url+'/'+lid, lawnmower)
  }

  // Delete Lawnmower
  deleteLawnmower(lawnmower: LawnmowerModel | number): Observable<LawnmowerModel> {
    const id = typeof lawnmower === 'number' ? lawnmower : lawnmower.id;
    return this.httpClient.delete<LawnmowerModel>(environment.apis.lawnmower.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('LawnmowerService Destroy');
  // }

}
