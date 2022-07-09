import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LightningModel, DataLightningModel } from './lightningModel';
import { DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class LightningService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lightnings
  getAllLightnings(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
  }

  // Add Lightning
  addLightning(lightning: LightningModel) {
    const json = {
      name: lightning.name,
      garden: lightning.garden
    };
    return this.httpClient.post(environment.apis.lightning.url, json)
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
  deleteLightning(id: number): Observable<LightningModel> {
    return this.httpClient.delete<LightningModel>(environment.apis.lightning.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('LightningService Destroy');
  // }

}
