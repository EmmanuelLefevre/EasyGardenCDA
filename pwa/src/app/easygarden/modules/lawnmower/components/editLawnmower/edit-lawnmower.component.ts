import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LawnmowerService } from '../../lawnmower.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LawnmowerModel } from '../../lawnmowerModel';

@Component({
  selector: 'app-editLawnmower',
  templateUrl: './edit-lawnmower.component.html',
  styleUrls: ['./edit-lawnmower.component.scss']
})

export class EditLawnmowerComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditLawnmowerForm Group
  editLawnmowerForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  lawnmower!: LawnmowerModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private lawnmowerService: LawnmowerService) {
    this.editLawnmowerForm = this.formBuilder.group({
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

    let wid = this.activated.snapshot.paramMap.get('id')
    this.lawnmowerService.getLawnmower(wid).subscribe(
      data => {
        this.lawnmower = data
        this.value = this.lawnmower.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editLawnmowerForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.editLawnmowerForm.invalid) {
      return;
    } else {
      const typedEditLawnmowerForm: LawnmowerModel = this.editLawnmowerForm.value;
      this.success = JSON.stringify(typedEditLawnmowerForm);
      let wid = this.activated.snapshot.paramMap.get('id')
      this.lawnmowerService.updateLawnmower(typedEditLawnmowerForm, wid).subscribe()
      this.location.back()
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editLawnmowerForm.reset();
  }

  // Close editLawnmowerComponent
  goBack(): void {
    this.location.back()
  }

}
