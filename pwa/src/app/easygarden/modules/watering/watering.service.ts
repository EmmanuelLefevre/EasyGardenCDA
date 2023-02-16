import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IWatering, IDataWatering } from './wateringModel';


@Injectable({
  providedIn: 'root'
})

export class WateringService {
  
  constructor(private httpClient: HttpClient) { }
  
  // Get Index of Waterings
  getAllWaterings(): Observable<IDataWatering[]> {
    return this.httpClient.get<IDataWatering[]>(environment.apis.watering.url);
  }

  // Add Watering
  addWatering(watering: IWatering) {
    const json = {
      name: watering.name,
      garden: watering.garden
    };
    return this.httpClient.post(environment.apis.watering.url, json)
  }

  // Get Watering
  getWatering(wid: string | null): Observable<IWatering>{
    return this.httpClient.get<IWatering>(environment.apis.watering.url+'/'+wid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<IDataWatering[]> {
    return this.httpClient.put<IDataWatering[]>(environment.apis.watering.url+'/'+id, {status})
  }

  // Update Watering
  updateWatering(watering: IWatering, wid: string | null): Observable<IDataWatering[]> {
    return this.httpClient.put<IDataWatering[]>(environment.apis.watering.url+'/'+wid, watering)
  }

  // Delete Watering
  deleteWatering(id: number): Observable<IWatering> {
    return this.httpClient.delete<IWatering>(environment.apis.watering.url+'/'+id)
  }
  
}
