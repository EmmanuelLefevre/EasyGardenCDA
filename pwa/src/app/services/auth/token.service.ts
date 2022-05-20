import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import { TokenUserModel } from '../../models/userModel';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('access_token', token)    
    this.router.navigate(['easygarden'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  clearToken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  clearTokenExpired(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  getPayload(){
    let user: TokenUserModel = {
      id: 0,
      nom: '',
      prenom: '',
      email: ''
    }

    let token = localStorage.getItem('token')
    if(token != null){
      const decode: TokenUserModel =  jwtDecode<TokenUserModel>(token)
      user.id = decode.id
      user.nom = decode.nom
      user.prenom = decode.prenom
      user.email = decode.email
    }

    return user  
  }

}