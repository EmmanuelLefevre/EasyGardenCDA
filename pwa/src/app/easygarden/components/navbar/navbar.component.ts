import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../../_services/auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.tokenService.clearToken()
  }

}
