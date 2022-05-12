import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterFormValidationService } from '../services/register-form-validation.service';

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

  constructor(private formBuilder: FormBuilder, private customValidator: RegisterFormValidationService ) { }

  ngOnInit(): void {
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

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Error: Form invalid');
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));
    this.success = JSON.stringify(this.registerForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
