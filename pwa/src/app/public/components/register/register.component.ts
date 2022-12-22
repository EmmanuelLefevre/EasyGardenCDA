import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../_services/auth/auth.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';
import { FormValidationService } from '../../../_services/service/form-validation.service';
import { UserModel } from '../../../_models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  // Toggle faEyeSlash
  visible: boolean = false;
  public toggle(): void {
    this.visible = !this.visible;
  }

  // RegisterForm Group
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    pseudo: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  submitted = false;
  success = '';
  
  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private authService: AuthService,
              private snackbarService: SnackbarService,
              private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.customValidator.validEmail()
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40),
          this.customValidator.strongPassword()
        ]
      ],
      confirmPassword: ['', [Validators.required]],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validName()
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validName()
        ]
      ],
      pseudo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validPseudo()
        ]
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          this.customValidator.validPhoneNumber()
        ]
      ],
    },
    {
      validators: [this.customValidator.passwordMatch("password", "confirmPassword")],
    });
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const typedRegisterForm: UserModel = this.registerForm.value;
    delete this.registerForm.value.confirmPassword;
    this.success = JSON.stringify(typedRegisterForm);
    this.authService.registerIn(typedRegisterForm).subscribe(
      () => {
        const firstName = this.registerForm.get('firstName')?.value;
        const lastName = this.registerForm.get('lastName')?.value;
        this.snackbarService.showNotification(`Bienvenu ` + firstName + ' ' + lastName + ',' +
          `\nveuillez confirmer votre compte dans l\'email qui vous a été envoyé.`, 'register')
        this.router.navigate(['login'])
        }
    )
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
