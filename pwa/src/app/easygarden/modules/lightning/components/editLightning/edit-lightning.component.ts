import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LightningService } from '../../lightning.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LightningModel } from '../../lightningModel';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-lightning',
  templateUrl: './edit-lightning.component.html'
})

export class EditLightningComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditLightningForm Group
  editLightningForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  name = '';
  value = '';
  lightning!: LightningModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private lightningService: LightningService,
              public snackBar: MatSnackBar) {
    this.editLightningForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validEquipmentName()
        ]
      ]
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    let lid = this.activated.snapshot.paramMap.get('id')
    this.lightningService.getLightning(lid).subscribe(
      data => {
        this.lightning = data
        this.value = this.lightning.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editLightningForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.editLightningForm.invalid) {
      return;
    } else {
      const typedEditLightningForm: LightningModel = this.editLightningForm.value;
      this.success = JSON.stringify(typedEditLightningForm);
      let lid = this.activated.snapshot.paramMap.get('id')
      this.lightningService.updateLightning(typedEditLightningForm, lid).subscribe()
      this.location.back()
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editLightningForm.reset();
  }

  // Close editLightningComponent
  goBack(): void {
    this.location.back()
  }

  // Snackbar
  openSnackBar(_value: string, action: string) {
    this.snackBar.open('L\'éclairage "' + this.value + '"' + ' a bien été renommée en "' + this.name + '".', action, {
        duration: 4000,
        panelClass: ['snackbar-animation'],
        verticalPosition: 'bottom',
        horizontalPosition: 'start'
    });
  }

}
