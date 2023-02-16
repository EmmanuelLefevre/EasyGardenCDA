import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPortal, IDataPortal } from './portalModel';


@Injectable({
  providedIn: 'root'
})

export class PortalService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Portals
  getAllPortals(): Observable<IDataPortal[]> {
    return this.httpClient.get<IDataPortal[]>(environment.apis.portal.url);
  }

  // Add Portal
  addPortal(portal: IPortal) {
    const json = {
      name: portal.name,
      garden: portal.garden
    };
    return this.httpClient.post(environment.apis.portal.url, json)
  }

  // Get Portal
  getPortal(pid: string | null): Observable<IPortal>{
    return this.httpClient.get<IPortal>(environment.apis.portal.url+'/'+pid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<IDataPortal[]> {
    return this.httpClient.put<IDataPortal[]>(environment.apis.portal.url+'/'+id, {status})
  }

  // Update Portal
  updatePortal(portal: IPortal, pid: string | null): Observable<IDataPortal[]> {
    return this.httpClient.put<IDataPortal[]>(environment.apis.portal.url+'/'+pid, portal)
  }

  // Delete Portal
  deletePortal(id: number): Observable<IPortal> {
    return this.httpClient.delete<IPortal>(environment.apis.portal.url+'/'+id)
  }

}
