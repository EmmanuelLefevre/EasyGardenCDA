import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../services/auth/auth.service';
import { FormValidationService } from '../../../services/service/form-validation.service';
import { TokenService } from '../../../services/auth/token.service';
import { CredentialsModel } from '../../../models/credentialsModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  // Toggle faEyeSlash
  visible: boolean = false;
  public toggle(): void {
    this.visible = !this.visible;
  }

  // Close component Login
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeLoginForm() {
    this.onClose.emit(true);
  }

  // LoginForm Group
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  success = '';

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private authService: AuthService,
              private tokenService: TokenService) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.customValidator.validEmail()
        ]
      ],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    const typedLoginForm: CredentialsModel = this.loginForm.value;
    this.success = JSON.stringify(typedLoginForm);
    console.log(typedLoginForm)
    this.authService.logIn(typedLoginForm).subscribe(
      data => {
        console.log(data.token)
        this.tokenService.saveToken(data.token)
      },
      err => console.log(err)
    )
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

}
