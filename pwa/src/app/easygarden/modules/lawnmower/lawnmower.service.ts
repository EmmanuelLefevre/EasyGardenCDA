import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LawnmowerModel, DataLawnmowerModel } from './lawnmowerModel';
import { DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class LawnmowerService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lawnmowers
  getAllLawnmowers(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
  }

  // Add Lawnmower
  addLawnmower(lawnmower: LawnmowerModel) {
    const json = {
      name: lawnmower.name,
      garden: lawnmower.garden
    };
    return this.httpClient.post(environment.apis.lawnmower.url, json)
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
  deleteLawnmower(id: number): Observable<LawnmowerModel> {
    return this.httpClient.delete<LawnmowerModel>(environment.apis.lawnmower.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('LawnmowerService Destroy');
  // }

}
