import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeRegister() {
    this.onClose.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
