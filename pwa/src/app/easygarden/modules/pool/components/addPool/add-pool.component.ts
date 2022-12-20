import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { PoolService } from '../../pool.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { PoolModel } from '../../poolModel';
import { GardenModel } from 'src/app/easygarden/components/garden/gardenModel';
import { UserModel } from '../../../../../_models/userModel';

import { SnackbarService } from 'src/app/_services/service/snackbar.service';

@Component({
  selector: 'app-addpool',
  templateUrl: './add-pool.component.html'
})

export class AddPoolComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addPoolForm Group
  addPoolForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  pool!: PoolModel;

  // Snackbar display which garden is selected
  selected = '';
  gardenName = '';
  garden!: GardenModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private poolService: PoolService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) { 
    this.addPoolForm = this.formBuilder.group({
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
    this.fetchPools()
  }

    // Display Pools
    fetchPools(): void {
      this.poolService.getAllPools()
        .subscribe(
          (res:any) => {
            if (res.hasOwnProperty('hydra:member')) 
            this.users = res['hydra:member']
          }
        )
    }
  
    get f(): { [key: string]: AbstractControl } {
      return this.addPoolForm.controls;
    }
  
    // Submit button
    onSubmit() {
      this.submitted = true;
      if (this.addPoolForm.invalid) {
        return;
      } else {
        const typedAddPoolForm: PoolModel = this.addPoolForm.value;
        this.success = JSON.stringify(typedAddPoolForm);
        this.poolService.addPool(typedAddPoolForm).subscribe(
          () => {
            const name = this.addPoolForm.get('name')?.value;
            this.gardenService.getGardenName(this.selected).subscribe(
              data => {
                this.garden = data
                this.gardenName = this.garden.name
                this.snackbarService.showNotification('L\'équipement "' + name + '"' + ' a bien été ajouté au jardin de ' + this.gardenName + '.', 'created');
              }
            )
            this.router.navigate(['/easygarden/pool'])
          }
        )
      }
    }
  
    // Cancel button
    onReset(): void {
      this.submitted = false;
      this.addPoolForm.reset();
    }
  
    // Close addPoolComponent
    goBack(): void {
      this.location.back()
    }

}
