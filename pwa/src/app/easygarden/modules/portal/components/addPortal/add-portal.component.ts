import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { PortalService } from '../../portal.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { PortalModel } from '../../portalModel';
import { UserModel } from '../../../../../_models/userModel';

@Component({
  selector: 'app-add-portal',
  templateUrl: './add-portal.component.html',
  styleUrls: ['./add-portal.component.scss']
})

export class AddPortalComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addPortalForm Group
  addPortalForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  portal!: PortalModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private portalService: PortalService) { 
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
    this.fetchPortals()
  }

  // Display Gardens
  fetchPortals(): void {
    this.portalService.getAllPortals()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.users = res['hydra:member']
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
      const typedAddPortalForm: PortalModel = this.addPortalForm.value;
      this.success = JSON.stringify(typedAddPortalForm);
      this.portalService.addPortal(typedAddPortalForm).subscribe(
        () => {
          this.router.navigate(['/easygarden/portal'])
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