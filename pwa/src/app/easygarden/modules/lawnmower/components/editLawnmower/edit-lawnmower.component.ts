import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LawnmowerService } from '../../lawnmower.service';
import { SnackbarService } from 'src/app/_services/service/snackbar.service';

import { ILawnmower } from '../../lawnmowerModel';


@Component({
  selector: 'app-editLawnmower',
  templateUrl: './edit-lawnmower.component.html'
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
  lawnmower!: ILawnmower;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private lawnmowerService: LawnmowerService,
              private snackbarService: SnackbarService) {
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
    let lid = this.activated.snapshot.paramMap.get('id')
    this.lawnmowerService.getLawnmower(lid).subscribe(
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
      const typedEditLawnmowerForm: ILawnmower = this.editLawnmowerForm.value;
      this.success = JSON.stringify(typedEditLawnmowerForm);
      let lid = this.activated.snapshot.paramMap.get('id')
      this.lawnmowerService.updateLawnmower(typedEditLawnmowerForm, lid).subscribe(
        () => {
          const name = this.editLawnmowerForm.get('name')?.value;
          this.snackbarService.showNotification('La tondeuse "' + this.value + '"' + ' a bien été renommée en "' + name + '".', 'modified');
        }
      )
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
