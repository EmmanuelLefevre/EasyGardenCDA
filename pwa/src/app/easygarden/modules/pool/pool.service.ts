import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPool, IDataPool } from './poolModel';


@Injectable({
  providedIn: 'root'
})
export class PoolService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Pools
  getAllPools(): Observable<IDataPool[]> {
    return this.httpClient.get<IDataPool[]>(environment.apis.pool.url);
  }

  // Add Pool
  addPool(pool: IPool) {
    const json = {
      name: pool.name,
      garden: pool.garden
    };
    return this.httpClient.post(environment.apis.pool.url, json)
  }

  // Get Pool
  getPool(pid: string | null): Observable<IPool>{
    return this.httpClient.get<IPool>(environment.apis.pool.url+'/'+pid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<IDataPool[]> {
    return this.httpClient.put<IDataPool[]>(environment.apis.pool.url+'/'+id, {status})
  }

  // Update Lawnmower
  updatePool(pool: IPool, pid: string | null): Observable<IDataPool[]> {
    return this.httpClient.put<IDataPool[]>(environment.apis.pool.url+'/'+pid, pool)
  }

  // Delete Pool
  deletePool(id: number): Observable<IPool> {
    return this.httpClient.delete<IPool>(environment.apis.pool.url+'/'+id)
  }

}
