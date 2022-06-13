import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PoolModel, DataPoolModel } from './poolModel';

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Pools
  getAllPools(): Observable<DataPoolModel[]> {
    return this.httpClient.get<DataPoolModel[]>(environment.apis.pool.url);
  }

  // Get Pools
  getPool(pid: string | null): Observable<PoolModel>{
    return this.httpClient.get<PoolModel>(environment.apis.pool.url+'/'+pid)
  }

  // Update Status
  updateStatus(status: boolean, id: number): Observable<DataPoolModel[]> {
    return this.httpClient.put<DataPoolModel[]>(environment.apis.pool.url+'/'+id, {status})
  }

  // Update Lawnmower
  updatePool(pool: PoolModel, pid: string | null): Observable<DataPoolModel[]> {
    return this.httpClient.put<DataPoolModel[]>(environment.apis.pool.url+'/'+pid, pool)
  }

  // Delete Pool
  deletePool(pool: PoolModel | number): Observable<PoolModel> {
    const id = typeof pool === 'number' ? pool : pool.id;
    return this.httpClient.delete<PoolModel>(environment.apis.pool.url+'/'+id)
  }

  // unsubscribe() {
  //   throw new Error('PoolService Destroy');
  // }

}
