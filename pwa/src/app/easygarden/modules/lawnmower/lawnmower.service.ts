import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DataLawnmowerModel, LawnmowerModel } from './lawnmowerModel';

@Injectable({
  providedIn: 'root'
})

export class LawnmowerService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lawnmowers
  getAllLawnmowers(): Observable<DataLawnmowerModel[]> {
    return this.httpClient.get<DataLawnmowerModel[]>(environment.apis.lawnmower.url);
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataLawnmowerModel[]> {
    return this.httpClient.put<DataLawnmowerModel[]>(environment.apis.lawnmower.url+'/'+id, {status})
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
