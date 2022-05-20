import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  title = 'Easy Garden';
  faUserCircle = faUserCircle;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  // Login Component
  public loginComponent = false;
  loadLoginComponent(){
    this.loginComponent = !this.loginComponent;
  }
  loginComponentClosed(_onClosed: any) {
    this.loginComponent = false;
    this.router.navigate(['home']);
  }

  // Register Component
  public registerComponent = false;
  loadRegisterComponent(){
    this.registerComponent = !this.registerComponent;
  }
  registerComponentClosed(_onClosed: any) {
    this.registerComponent = false;
    this.router.navigate(['home']);
  }

}
