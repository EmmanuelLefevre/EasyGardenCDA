import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterModel } from '../../models/registerModel';

import { FormValidationService } from '../../services/service/form-validation.service';
import { AuthService } from '../../services/auth/auth.service';

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

  visible: boolean = false;
  public toggle(): void {
    this.visible = !this.visible;
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

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

  closeRegisterForm() {
    this.onClose.emit(true);
  }

  user: RegisterModel = { email: '',
                          password: '',
                          confirmPassword: '',
                          lastName: '',
                          firstName: '',
                          pseudo:'',
                          phoneNumber: '' };

  constructor(private formBuilder: FormBuilder,
              private customValidator: FormValidationService,
              private router: Router,
              private authService: AuthService) {
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
          Validators.maxLength(10),
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

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Error: Form invalid');
    }
    // const typedRegisterForm: RegisterModel = this.registerForm.value;
    // delete this.registerForm.value.confirmPassword;
    // this.success = JSON.stringify(typedRegisterForm);
    // console.log(typedRegisterForm);
    // this.success = this.registerForm.value;
    // console.log(this.registerForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
