import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LightningService } from '../../lightning.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { ILightning } from '../../lightningModel';


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
  value = '';
  lightning!: ILightning;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private lightningService: LightningService,
              private snackbarService: SnackbarService) {
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
      const typedEditLightningForm: ILightning = this.editLightningForm.value;
      this.success = JSON.stringify(typedEditLightningForm);
      let lid = this.activated.snapshot.paramMap.get('id')
      this.lightningService.updateLightning(typedEditLightningForm, lid).subscribe(
        () => {
          const name = this.editLightningForm.get('name')?.value;
          this.snackbarService.showNotification('L\'éclairage "' + this.value + '"' + ' a bien été renommé en "' + name + '".', 'modified');
        }
      )
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

}
