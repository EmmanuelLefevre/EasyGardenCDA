import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { WateringService } from '../../watering.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { WateringModel } from '../../wateringModel';
import { IGarden } from 'src/app/easygarden/components/garden/gardenModel';
import { UserModel } from '../../../../../_models/userModel';

import { SnackbarService } from 'src/app/_services/service/snackbar.service';


@Component({
  selector: 'app-add-watering',
  templateUrl: './add-watering.component.html'
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
  
  // Snackbar display which garden is selected
  selected = '';
  gardenName = '';
  garden!: IGarden;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private wateringService: WateringService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) { 
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
        '',
        [
          Validators.required
        ]
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
          const name = this.addWateringForm.get('name')?.value;
          this.gardenService.getGardenName(this.selected).subscribe(
            data => {
              this.garden = data
              this.gardenName = this.garden.name
              this.snackbarService.showNotification('L\'arrosage "' + name + '"' + ' a bien été ajouté au jardin de ' + this.gardenName + '.', 'created');
            }
          )   
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
