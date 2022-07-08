import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { GardenModel, DataGardenModel } from './gardenModel';
import { DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class GardenService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Gardens
  getAllGardens(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
  }

  // Add Garden
  addgarden(garden: GardenModel) {
    const json = {
      name: garden.name,
      user: garden.user
    };
    return this.httpClient.post(environment.apis.garden.url, json)
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
  deleteGarden(id: string): Observable<GardenModel> {
    return this.httpClient.delete<GardenModel>(environment.apis.garden.url+'/'+id)
  }

}