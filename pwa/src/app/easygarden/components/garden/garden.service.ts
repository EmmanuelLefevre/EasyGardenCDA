import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { GardenModel, DataGardenModel } from './gardenModel';

@Injectable({
  providedIn: 'root'
})

export class GardenService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Gardens
  getAllGardens(): Observable<DataGardenModel[]> {
    return this.httpClient.get<DataGardenModel[]>(environment.apis.garden.url);
  }

  // Get Garden
  getGarden(gid: string | null): Observable<GardenModel>{
    return this.httpClient.get<GardenModel>(environment.apis.garden.url+'/'+gid)
  }

  // Update Garden
  updateGarden(garden: GardenModel, gid: string | null): Observable<DataGardenModel[]> {
    return this.httpClient.put<DataGardenModel[]>(environment.apis.garden.url+'/'+gid, garden)
  }

  // Delete Garden
  deleteGarden(garden: GardenModel | number): Observable<GardenModel> {
    const id = typeof garden === 'number' ? garden : garden.id;
    return this.httpClient.delete<GardenModel>(environment.apis.garden.url+'/'+id)
  }

}