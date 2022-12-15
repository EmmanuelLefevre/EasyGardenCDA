import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { GardenService } from '../../garden.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenModel } from '../../gardenModel';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-garden',
  templateUrl: './edit-garden.component.html'
})

export class EditGardenComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditGardenForm Group
  editGardenForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  name = '';
  garden!: GardenModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router,
              private location: Location,
              private activated: ActivatedRoute,
              private gardenService: GardenService,
              public snackBar: MatSnackBar) {
    this.editGardenForm = this.formBuilder.group({
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

    let gid = this.activated.snapshot.paramMap.get('id')
    this.gardenService.getGarden(gid).subscribe(
      data => {
        this.garden = data
        this.value = this.garden.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editGardenForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.editGardenForm.invalid) {
      return;
    } else {
      const typedEditGardenForm: GardenModel = this.editGardenForm.value;
      this.success = JSON.stringify(typedEditGardenForm);
      let gid = this.activated.snapshot.paramMap.get('id')
      this.gardenService.updateGarden(typedEditGardenForm, gid).subscribe()
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/easygarden']);
      });
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editGardenForm.reset();
  }

  // Close editGardenComponent
  goBack(): void {
    this.location.back()
  }

  // Snackbar
  openSnackBar(_value: string, _name: string) {
    this.snackBar.open('Le jardin "' + this.value + '"' + ' a bien été renommée en "' + this.name + '".', '', {
      duration: 4000,
      panelClass: ['snackbar-animation'],
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

}
