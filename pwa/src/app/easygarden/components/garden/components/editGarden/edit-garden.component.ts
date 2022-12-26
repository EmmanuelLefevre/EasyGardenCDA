import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { GardenService } from '../../garden.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { IGarden } from '../../gardenModel';

import { SnackbarService } from 'src/app/_services/service/snackbar.service';

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
  garden!: IGarden;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router,
              private location: Location,
              private activated: ActivatedRoute,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) {
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
      const typedEditGardenForm: IGarden = this.editGardenForm.value;
      this.success = JSON.stringify(typedEditGardenForm);
      let gid = this.activated.snapshot.paramMap.get('id')
      this.gardenService.updateGarden(typedEditGardenForm, gid).subscribe()
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        const name = this.editGardenForm.get('name')?.value;
          this.snackbarService.showNotification('Le jardin "' + this.value + '"' + ' a bien été renommé en "' + name + '".', 'modified');
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

}
