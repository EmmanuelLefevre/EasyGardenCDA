import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {  PortalModel, DataPortalModel } from './portalModel';

@Injectable({
  providedIn: 'root'
})

export class PortalService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Portals
  getAllPortals(): Observable<DataPortalModel[]> {
    return this.httpClient.get<DataPortalModel[]>(environment.apis.portal.url);
  }

  // Get Portal
  getPortal(pid: string | null): Observable<PortalModel>{
    return this.httpClient.get<PortalModel>(environment.apis.portal.url+'/'+pid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataPortalModel[]> {
    return this.httpClient.put<DataPortalModel[]>(environment.apis.portal.url+'/'+id, {status})
  }

  // Update Portal
  updatePortal(portal: PortalModel, pid: string | null): Observable<DataPortalModel[]> {
    return this.httpClient.put<DataPortalModel[]>(environment.apis.portal.url+'/'+pid, portal)
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
