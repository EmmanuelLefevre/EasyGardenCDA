import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginModel } from '../../models/loginModel';

import { FormValidationService } from '../../services/service/form-validation.service';
import { AuthService } from '../../services/auth/auth.service';


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

  visible: boolean = false;
  public toggle(): void {
    this.visible = !this.visible;
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  loginForm = new FormGroup({
    email: new FormControl(''),
    plainPassword: new FormControl('')
  });
  submitted = false;
  success = '';
  
  closeLoginForm() {
    this.onClose.emit(true);
  }

  user: LoginModel = { email: '', plainPassword: '', token: '' };

  constructor(private formBuilder: FormBuilder,
              private customValidator: FormValidationService,
              private router: Router,
              private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.customValidator.validEmail()
        ]
      ],
      plainPassword: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('Error: Form invalid');
    }
    // const typedLoginForm: LoginModel = this.loginForm.value;
    // delete this.loginForm.value.confirmPassword;
    // this.success = JSON.stringify(typedLoginForm);
    // console.log(typedLoginForm);
    this.success = this.loginForm.value;
    console.log(this.loginForm.value);
  }
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     console.log('Error: Form invalid');
  //   }
  //   this.authService.logIn(this.user).subscribe(item =>
  //     this.router.navigate(['/'])
  //   );
  // }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }

}
