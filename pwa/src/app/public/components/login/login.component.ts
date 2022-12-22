import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../_services/auth/auth.service';
import { FormValidationService } from '../../../_services/service/form-validation.service';
import { TokenService } from '../../../_services/auth/token.service';
import { DecodedTokenService } from 'src/app/_services/service/decoded-token.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { CredentialsModel } from '../../../_models/credentialsModel';


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

  // LoginForm Group
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  success = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private authService: AuthService,
              private tokenService: TokenService,
              private snackbarService: SnackbarService,
              private decodedTokenService: DecodedTokenService) {
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
    if (this.loginForm.invalid) {
      return;
    }
    const typedLoginForm: CredentialsModel = this.loginForm.value;
    this.success = JSON.stringify(typedLoginForm);
    this.authService.logIn(typedLoginForm).subscribe(
      data => {
        this.tokenService.saveToken(data.token)
        this.router.navigate(['easygarden'])
        this.snackbarService.showNotification(`Bonjour ${this.decodedTokenService.firstNameDecoded()} 
                                              ${this.decodedTokenService.lastNameDecoded()}.`, 'logIn-logOut')
      }
    )
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

}
