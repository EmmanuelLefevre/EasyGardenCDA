import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DataWateringModel, WateringModel } from './wateringModel';

@Injectable({
  providedIn: 'root'
})

export class WateringService {
  
  constructor(private httpClient: HttpClient) { }
  
  // Get Index of Waterings
  getAll(): Observable<DataWateringModel[]> {
    return this.httpClient.get<DataWateringModel[]>(environment.apis.watering.url);
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataWateringModel[]> {
    return this.httpClient.put<DataWateringModel[]>(environment.apis.watering.url+'/'+id, {status})
  }

  // Delete Watering
  deleteWatering(watering: WateringModel | number): Observable<any> {
    const id = typeof watering === 'number' ? watering : watering.id;
    return this.httpClient.delete<DataWateringModel[]>(environment.apis.watering.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('WateringService Destroy');
  // }
  
}
