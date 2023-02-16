import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ILightning, IDataLightning } from './lightningModel';


@Injectable({
  providedIn: 'root'
})

export class LightningService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Lightnings
  getAllLightnings(): Observable<IDataLightning[]> {
    return this.httpClient.get<IDataLightning[]>(environment.apis.lightning.url);
  }

  // Add Lightning
  addLightning(lightning: ILightning) {
    const json = {
      name: lightning.name,
      garden: lightning.garden
    };
    return this.httpClient.post(environment.apis.lightning.url, json)
  }

  // Get Lightning
  getLightning(lid: string | null): Observable<ILightning>{
    return this.httpClient.get<ILightning>(environment.apis.lightning.url+'/'+lid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<IDataLightning[]> {
    return this.httpClient.put<IDataLightning[]>(environment.apis.lightning.url+'/'+id, {status})
  }

  // Update Lightning
  updateLightning(lightning: ILightning, lid: string | null): Observable<IDataLightning[]> {
    return this.httpClient.put<IDataLightning[]>(environment.apis.lightning.url+'/'+lid, lightning)
  }

  // Delete Lightning
  deleteLightning(id: number): Observable<ILightning> {
    return this.httpClient.delete<ILightning>(environment.apis.lightning.url+'/'+id)
  }

}
