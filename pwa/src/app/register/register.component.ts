import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidatorCheck } from '../providers/PasswordValidatorCheck';

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

  registerForm = new FormGroup( {
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    pseudo: new FormControl(''),
    phoneNumber: new FormControl('')
  })
  submitted = false;
  success = '';

  closeRegister() {
    this.onClose.emit(true);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40),
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[:;.~µ!?§@#$%^&*])[A-Za-z\d:;.~µ!?§@#$%^&*].{8,40}')
        ]
      ],
      confirmPassword: ['', [Validators.required]],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      pseudo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ],
      phoneNumber: [
        '',
        [
          Validators.required
          // Validators.pattern('^(?:\+33\s|0)[1-9](?:\s\d{2}){4}$')
        ]
      ],
    },
    {
      validators: [PasswordValidatorCheck.mustMatch("password", "confirmPassword")],
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
