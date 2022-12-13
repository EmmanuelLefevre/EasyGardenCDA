import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiCodeService {

  apiCode = new Subject<string>()

  constructor() { }

  sendCode(message: string): void{
    this.apiCode.next(message)
  }

}