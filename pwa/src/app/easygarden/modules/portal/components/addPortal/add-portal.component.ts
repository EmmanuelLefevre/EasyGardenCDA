import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenService } from 'src/app/easygarden/components/garden/garden.service';
import { PortalService } from '../../portal.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { IPortal } from '../../portalModel';
import { IGarden } from 'src/app/easygarden/components/garden/gardenModel';


@Component({
  selector: 'app-add-portal',
  templateUrl: './add-portal.component.html'
})

export class AddPortalComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // addPortalForm Group
  addPortalForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  portal!: IPortal;

  // Snackbar display which garden is selected by user
  gardens: IGarden[] = [];
  selected = '';
  gardenName = '';
  garden!: IGarden;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private portalService: PortalService,
              private gardenService: GardenService,
              private snackbarService: SnackbarService) { 
    this.addPortalForm = this.formBuilder.group({
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
    return this.addPortalForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addPortalForm.invalid) {
      return;
    } else {
      const typedAddPortalForm: IPortal = this.addPortalForm.value;
      this.success = JSON.stringify(typedAddPortalForm);
      this.portalService.addPortal(typedAddPortalForm).subscribe(
        () => {
          const name = this.addPortalForm.get('name')?.value;
          this.router.navigate(['/easygarden/portal']);
          this.gardenService.getGarden(this.selected).subscribe(
            data => {
              this.garden = data
              this.gardenName = this.garden.name
              this.snackbarService.showNotification('Le portail "' + name + '"' + ' a bien été ajouté au jardin de ' + this.gardenName + '.', 'created');
            }
          )
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addPortalForm.reset();
  }

  // Close addPortalComponent
  goBack(): void {
    this.location.back()
  }

}
