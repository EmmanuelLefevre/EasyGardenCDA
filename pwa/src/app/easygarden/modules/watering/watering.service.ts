import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { WateringModel, DataWateringModel } from './wateringModel';
import { DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class WateringService {
  
  constructor(private httpClient: HttpClient) { }
  
  // Get Index of Waterings
  getAllWaterings(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
  }

  // Get Watering
  getWatering(wid: string | null): Observable<WateringModel>{
    return this.httpClient.get<WateringModel>(environment.apis.watering.url+'/'+wid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataWateringModel[]> {
    return this.httpClient.put<DataWateringModel[]>(environment.apis.watering.url+'/'+id, {status})
  }

  // Update Watering
  updateWatering(watering: WateringModel, wid: string | null): Observable<DataWateringModel[]> {
    return this.httpClient.put<DataWateringModel[]>(environment.apis.watering.url+'/'+wid, watering)
  }

  // Delete Watering
  deleteWatering(id: number): Observable<WateringModel> {
    return this.httpClient.delete<WateringModel>(environment.apis.watering.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('WateringService Destroy');
  // }
  
}
