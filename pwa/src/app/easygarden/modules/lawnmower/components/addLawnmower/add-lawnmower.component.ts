import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
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

export class AddLawnmowerComponent {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  addLawnmowerForm = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        this.customValidator.validEquipmentName()
      ]
    ],
    garden:
      // this.formBuilder.control<IGarden | null>(null, Validators.required)
      [
        null as IGarden | null,
        Validators.required],
        nonNullable: true
  })

  gardens: IGarden[] = [];
  
  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private lawnmowerService: LawnmowerService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) {
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

  // Submit
  onSubmit() {
    if (!this.addLawnmowerForm.valid) {
      return;
    }

    const formValue: ILawnmower = this.addLawnmowerForm.getRawValue();
    this.lawnmowerService.addLawnmower(formValue).subscribe(
      () => {
        const lawnmowerName = formValue.name;
        this.router.navigate(['/easygarden/lawnmower']);
        this.snackbarService.showNotification('La tondeuse "' + lawnmowerName + '"' + 
        ' a bien été ajoutée au jardin de ' + formValue.garden.name + '.', 'created');
      }
    );
  }

  // Cancel button
  onReset(): void {
    this.addLawnmowerForm.reset();
  }

  // Close addLawnmowerComponent
  goBack(): void {
    this.location.back()
  }

}
