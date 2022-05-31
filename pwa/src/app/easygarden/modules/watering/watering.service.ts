import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DataWateringModel } from './wateringModel';

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

  // unsubscribe() {
  //   throw new Error('WateringService Destroy');
  // }
  
}
