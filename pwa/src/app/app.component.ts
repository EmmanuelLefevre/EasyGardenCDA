import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Easy Garden';
  faUserCircle = faUserCircle;

  // Login Component
  public loginComponent = false;
  loadLoginComponent(){
    this.loginComponent = !this.loginComponent;
  }
  loginComponentClosed(_onClosed: any) {
    this.loginComponent = false;
  }

  // Register Component
  public registerComponent = false;
  loadRegisterComponent(){
    this.registerComponent = !this.registerComponent;
  }
  registerComponentClosed(_onClosed: any) {
    this.registerComponent = false;
  }
  
}
