import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { WateringService } from '../../../watering.service';
import { FormValidationService } from '../../../../../../_services/service/form-validation.service';
import { WateringModel } from '../../../wateringModel';

@Component({
  selector: 'app-edit-watering',
  templateUrl: './edit-watering.component.html',
  styleUrls: ['./edit-watering.component.scss']
})

export class EditWateringComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditWateringForm Group
  editWateringForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  watering!: WateringModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private wateringService: WateringService) {
    this.editWateringForm = this.formBuilder.group({
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

    let wid = this.activated.snapshot.paramMap.get('id')
    this.wateringService.getWatering(wid).subscribe(
      data => {
        this.watering = data
        this.value = this.watering.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editWateringForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    console.log(this.editWateringForm);
    if (this.editWateringForm.invalid) {
      return;
    } else {
      const typedEditWateringForm: WateringModel = this.editWateringForm.value;
      this.success = JSON.stringify(typedEditWateringForm);
      let wid = this.activated.snapshot.paramMap.get('id')
      this.wateringService.updateWatering(typedEditWateringForm, wid).subscribe()
      this.location.back()
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editWateringForm.reset();
  }

  // Close editWateringComponent
  goBack(): void {
    this.location.back()
  }

}
