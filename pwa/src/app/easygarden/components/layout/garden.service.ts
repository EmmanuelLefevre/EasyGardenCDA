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

  // Delete Garden
  deleteGarden(garden: GardenModel | number): Observable<GardenModel> {
    const id = typeof garden === 'number' ? garden : garden.id;
    return this.httpClient.delete<GardenModel>(environment.apis.garden.url+'/'+id)
  }

}