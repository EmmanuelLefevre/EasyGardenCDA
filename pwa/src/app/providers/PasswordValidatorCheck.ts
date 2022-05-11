import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class PasswordValidatorCheck {

  constructor() {}

  static strongPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == '') return null;

      let re = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[:;.~µ!?§@#$%^&*])[A-Za-z\d:;.~µ!?§@#$%^&*].{8,40}');
      if (re.test(control.value)) {
        return null;
      } else {
        return { strongPassword: true };
      }
    };
  }
  static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}

// import { FormGroup } from '@angular/forms';
    
// export function PasswordValidatorCheck(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors['match']) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }