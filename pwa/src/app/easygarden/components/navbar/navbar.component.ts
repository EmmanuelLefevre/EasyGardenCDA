import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../../_services/auth/token.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.snackbarService.showNotificationLoginLogout(`Vous êtes bien déconnecté.`, 'logIn-logOut')
    this.tokenService.clearToken()
  }

}
