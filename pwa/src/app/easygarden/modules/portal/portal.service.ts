import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DataPortalModel, PortalModel } from './portalModel';

@Injectable({
  providedIn: 'root'
})

export class PortalService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Portals
  getAll(): Observable<DataPortalModel[]> {
    return this.httpClient.get<DataPortalModel[]>(environment.apis.portal.url);
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataPortalModel[]> {
    return this.httpClient.put<DataPortalModel[]>(environment.apis.portal.url+'/'+id, {status})
  }

  // Delete Portal
  deletePortal(portal: PortalModel | number): Observable<PortalModel> {
    const id = typeof portal === 'number' ? portal : portal.id;
    return this.httpClient.delete<PortalModel>(environment.apis.portal.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('PortalService Destroy');
  // }

}
