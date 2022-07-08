import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserModel, DataUserModel } from '../../../_models/userModel';

@Injectable({
  providedIn: 'root'
})

export class ProfilService {

  constructor(private httpClient: HttpClient) { }

  // Get User
  getUser(): Observable<DataUserModel[]> {
    return this.httpClient.get<DataUserModel[]>(environment.apis.user.url);
  }

  // Update
  updateUser(user: UserModel, id: number): Observable<DataUserModel[]> {
    return this.httpClient.put<DataUserModel[]>(environment.apis.user.url+'/'+id, user)
  }

  // Delete
  deleteUser(id: number): Observable<UserModel> {
    return this.httpClient.delete<UserModel>(environment.apis.user.url+'/'+id)
  }

}
