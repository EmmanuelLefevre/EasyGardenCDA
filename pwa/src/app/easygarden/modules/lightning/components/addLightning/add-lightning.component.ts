import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { LightningService } from '../../lightning.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LightningModel } from '../../lightningModel';
import { UserModel } from '../../../../../_models/userModel';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-lightning',
  templateUrl: './add-lightning.component.html',
  styleUrls: ['./add-lightning.component.scss']
})

export class AddLightningComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addLawnmowerForm Group
  addLightningForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  lightning!: LightningModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private lightningService: LightningService,
              public snackBar: MatSnackBar) { 
    this.addLightningForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validEquipmentName()
        ]
      ],
      garden: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.fetchLightnings()
  }

  // Display Lightnings
  fetchLightnings(): void {
    this.lightningService.getAllLightnings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.users = res['hydra:member']
        }
      )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addLightningForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addLightningForm.invalid) {
      return;
    } else {
      const typedAddLightningForm: LightningModel = this.addLightningForm.value;
      this.success = JSON.stringify(typedAddLightningForm);
      this.lightningService.addLightning(typedAddLightningForm).subscribe(
        () => {
          this.router.navigate(['/easygarden/lightning'])
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addLightningForm.reset();
  }

  // Close addLightningComponent
  goBack(): void {
    this.location.back()
  }

  // Snackbar
  openSnackBar(_value: string) {
    this.snackBar.open('L\'éclairage "' + this.value + '"' + ' a bien été ajouté.', '', {
        duration: 4000,
        panelClass: ['snackbar-animation'],
        verticalPosition: 'bottom',
        horizontalPosition: 'start'
    });
  }

}
