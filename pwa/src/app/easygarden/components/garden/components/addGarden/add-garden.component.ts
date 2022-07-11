import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { GardenService } from '../../garden.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { GardenModel } from '../../gardenModel';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss']
})

export class AddGardenComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // addWateringForm Group
  addGardenForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  garden!: GardenModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private activated: ActivatedRoute,
              private gardenService: GardenService) {
    let gid = this.activated.snapshot.paramMap.get('id')
    this.addGardenForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          this.customValidator.validEquipmentName()
        ]
      ],
      user: [
        'api/users/'+gid
      ]
    })              
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addGardenForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addGardenForm.invalid) {
      return;
    } else {
      const typedAddGardenForm: GardenModel = this.addGardenForm.value;
      this.success = JSON.stringify(typedAddGardenForm);
      this.gardenService.addGarden(typedAddGardenForm).subscribe(
        () => {
          this.router.navigate(['/easygarden'])
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addGardenForm.reset();
  }

  // Close addGardenComponent
  goBack(): void {
    this.location.back()
  }

}