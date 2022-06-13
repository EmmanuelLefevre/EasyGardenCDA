import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LightningModel, DataLightningModel } from './lightningModel';

@Injectable({
  providedIn: 'root'
})

export class LightningService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lightnings
  getAllLightnings(): Observable<DataLightningModel[]> {
    return this.httpClient.get<DataLightningModel[]>(environment.apis.lightning.url);
  }

  // Get Lightning
  getLightning(lid: string | null): Observable<LightningModel>{
    return this.httpClient.get<LightningModel>(environment.apis.lightning.url+'/'+lid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataLightningModel[]> {
    return this.httpClient.put<DataLightningModel[]>(environment.apis.lightning.url+'/'+id, {status})
  }

  // Update Lightning
  updateLightning(lightning: LightningModel, lid: string | null): Observable<DataLightningModel[]> {
    return this.httpClient.put<DataLightningModel[]>(environment.apis.lightning.url+'/'+lid, lightning)
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
