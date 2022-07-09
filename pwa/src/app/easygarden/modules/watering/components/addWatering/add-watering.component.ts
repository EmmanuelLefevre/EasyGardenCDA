import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { WateringService } from '../../watering.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { WateringModel } from '../../wateringModel';
import { UserModel } from '../../../../../_models/userModel';

@Component({
  selector: 'app-add-watering',
  templateUrl: './add-watering.component.html',
  styleUrls: ['./add-watering.component.scss']
})

export class AddWateringComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addWateringForm Group
  addWateringForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  watering!: WateringModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private wateringService: WateringService) { 
    this.addWateringForm = this.formBuilder.group({
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
        ''
      ]
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.fetchWaterings()
  }

  // Display Waterings
  fetchWaterings(): void {
    this.wateringService.getAllWaterings()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.users = res['hydra:member']
        }
      )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addWateringForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addWateringForm.invalid) {
      return;
    } else {
      const typedAddWateringForm: WateringModel = this.addWateringForm.value;
      this.success = JSON.stringify(typedAddWateringForm);
      this.wateringService.addWatering(typedAddWateringForm).subscribe(
        () => {
          this.router.navigate(['/easygarden/watering'])
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addWateringForm.reset();
  }

  // Close addWateringComponent
  goBack(): void {
    this.location.back()
  }

}
