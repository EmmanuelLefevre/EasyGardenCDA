import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DataLightningModel, LightningModel } from './lightningModel';

@Injectable({
  providedIn: 'root'
})

export class LightningService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lightnings
  getAll(): Observable<DataLightningModel[]> {
    return this.httpClient.get<DataLightningModel[]>(environment.apis.lightning.url);
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataLightningModel[]> {
    return this.httpClient.put<DataLightningModel[]>(environment.apis.lightning.url+'/'+id, {status})
  }

  // Delete Lightning
  deleteLightning(lightning: LightningModel | number): Observable<LightningModel> {
    const id = typeof lightning === 'number' ? lightning : lightning.id;
    return this.httpClient.delete<LightningModel>(environment.apis.lightning.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('LightningService Destroy');
  // }

}
