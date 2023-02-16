import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IGarden, IDataGarden } from './gardenModel';


@Injectable({
  providedIn: 'root'
})

export class GardenService {

  constructor(private httpClient: HttpClient) { }

  // Get Index of Gardens
  getAllGardens(): Observable<IDataGarden[]> {
    return this.httpClient.get<IDataGarden[]>(environment.apis.garden.url);
  }

  // Add Garden
  addGarden(garden: IGarden) {
    const json = {
      name: garden.name,
      user: garden.user
    };
    return this.httpClient.post(environment.apis.garden.url, json)
  }

  // Get Garden
  getGarden(gid: string | null): Observable<IGarden>{
    return this.httpClient.get<IGarden>(environment.apis.garden.url+'/'+gid)
  }
  //Get garden.name for snackbar
  getGardenName(selected: string): Observable<IGarden>{
    return this.httpClient.get<IGarden>(environment.apis.gardenNameUri.url+'/'+selected)
  }

  // Update Garden
  updateGarden(garden: IGarden, gid: string | null): Observable<IDataGarden[]> {
    return this.httpClient.put<IDataGarden[]>(environment.apis.garden.url+'/'+gid, garden)
  }

  // Delete Garden
  deleteGarden(id: string): Observable<IGarden> {
    return this.httpClient.delete<IGarden>(environment.apis.garden.url+'/'+id)
  }


}