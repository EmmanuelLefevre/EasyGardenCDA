import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { PoolService } from '../../pool.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { IPool } from '../../poolModel';
import { IGarden } from 'src/app/easygarden/components/garden/gardenModel';


@Component({
  selector: 'app-addpool',
  templateUrl: './add-pool.component.html'
})

export class AddPoolComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // addPoolForm Group
  addPoolForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  pool!: IPool;

  // Snackbar display which gardens are owned by user
  gardens: IGarden[] = [];
  selected = '';
  gardenName = '';
  garden!: IGarden;

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
      return this.addPoolForm.controls;
    }
  
    // Submit button
    onSubmit() {
      this.submitted = true;
      if (this.addPoolForm.invalid) {
        return;
      } else {
        const typedAddPoolForm: IPool = this.addPoolForm.value;
        this.success = JSON.stringify(typedAddPoolForm);
        this.poolService.addPool(typedAddPoolForm).subscribe(
          () => {
            const name = this.addPoolForm.get('name')?.value;
            this.router.navigate(['/easygarden/pool']);
            this.gardenService.getGarden(this.selected).subscribe(
              data => {
                this.garden = data
                this.gardenName = this.garden.name
                this.snackbarService.showNotification('L\'équipement "' + name + '"' + ' a bien été ajouté au jardin de ' + this.gardenName + '.', 'created');
              }
            )
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
