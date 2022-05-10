import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;
  
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeLogin() {
    this.onClose.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
