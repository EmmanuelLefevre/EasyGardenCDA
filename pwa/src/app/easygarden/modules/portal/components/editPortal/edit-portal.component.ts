import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PortalService } from '../../portal.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { PortalModel } from '../../portalModel';

@Component({
  selector: 'app-edit-portal',
  templateUrl: './edit-portal.component.html',
  styleUrls: ['./edit-portal.component.scss']
})

export class EditPortalComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditPoolForm Group
  editPortalForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  portal!: PortalModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private portalService: PortalService) {
    this.editPortalForm = this.formBuilder.group({
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

    let pid = this.activated.snapshot.paramMap.get('id')
    this.portalService.getPortal(pid).subscribe(
      data => {
        this.portal = data
        this.value = this.portal.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editPortalForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.editPortalForm.invalid) {
      return;
    } else {
      const typedEditPortalForm: PortalModel = this.editPortalForm.value;
      this.success = JSON.stringify(typedEditPortalForm);
      let pid = this.activated.snapshot.paramMap.get('id')
      this.portalService.updatePortal(typedEditPortalForm, pid).subscribe()
      this.location.back()
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editPortalForm.reset();
  }

  // Close editPortalComponent
  goBack(): void {
    this.location.back()
  }

}