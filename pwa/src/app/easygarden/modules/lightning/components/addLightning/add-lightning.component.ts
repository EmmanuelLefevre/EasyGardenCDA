import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { LightningService } from '../../lightning.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { ILightning } from '../../lightningModel';
import { IGarden } from 'src/app/easygarden/components/garden/gardenModel';


@Component({
  selector: 'app-add-lightning',
  templateUrl: './add-lightning.component.html'
})

export class AddLightningComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // addLawnmowerForm Group
  addLightningForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  lightning!: ILightning;

  // Snackbar display which gardens are owned by user
  gardens: IGarden[] = [];
  selected = '';
  gardenName = '';
  garden!: IGarden;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private lightningService: LightningService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) { 
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
    this.fetchGardens()
  }

// Display Gardens in select
fetchGardens(): void {
  this.gardenService.getAllGardens()
    .subscribe(
      (res:any) => {
        if (res.hasOwnProperty('hydra:member')) 
        this.gardens = res['hydra:member']
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
      const typedAddLightningForm: ILightning = this.addLightningForm.value;
      this.success = JSON.stringify(typedAddLightningForm);
      this.lightningService.addLightning(typedAddLightningForm).subscribe(
        () => {
          const name = this.addLightningForm.get('name')?.value;
          this.gardenService.getGardenName(this.selected).subscribe(
            data => {
              this.garden = data
              this.gardenName = this.garden.name
              this.snackbarService.showNotification('L\'éclairage "' + name + '"' + ' a bien été ajouté au jardin de ' + this.gardenName + '.', 'created');
            }
          )   
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

}
