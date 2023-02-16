import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { LawnmowerService } from '../../lawnmower.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { IGarden } from 'src/app/easygarden/components/garden/gardenModel';
import { ILawnmower } from '../../lawnmowerModel';


@Component({
  selector: 'app-add-lawnmower',
  templateUrl: './add-lawnmower.component.html'
})

export class AddLawnmowerComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // addLawnmowerForm Group
  addLawnmowerForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  lawnmower!: ILawnmower;

  // Snackbar display which garden are owned by user
  gardens: IGarden[] = [];
  selected = '';
  gardenName = '';
  garden!: IGarden;
  
  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private lawnmowerService: LawnmowerService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) { 
    this.addLawnmowerForm = this.formBuilder.group({
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
    return this.addLawnmowerForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addLawnmowerForm.invalid) {
      return;
    } else {
      const typedAddLawnmowerForm: ILawnmower = this.addLawnmowerForm.value;
      this.success = JSON.stringify(typedAddLawnmowerForm);
      this.lawnmowerService.addLawnmower(typedAddLawnmowerForm).subscribe(
        () => {
          const name = this.addLawnmowerForm.get('name')?.value;
          this.gardenService.getGardenName(this.selected).subscribe(
            data => {
              this.garden = data
              this.gardenName = this.garden.name
              this.snackbarService.showNotification('La tondeuse "' + name + '"' + ' a bien été ajoutée au jardin de ' + this.gardenName + '.', 'created');
            }
          )
          this.router.navigate(['/easygarden/lawnmower'])
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addLawnmowerForm.reset();
  }

  // Close addLawnmowerComponent
  goBack(): void {
    this.location.back()
  }

}
