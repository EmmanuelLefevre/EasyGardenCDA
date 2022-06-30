import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PortalModel, DataPortalModel } from './portalModel';
import { DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class PortalService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Portals
  getAllPortals(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
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
  deletePortal(id: number): Observable<PortalModel> {
    return this.httpClient.delete<PortalModel>(environment.apis.portal.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('PortalService Destroy');
  // }

}
