import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PoolService } from '../../pool.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { PoolModel } from '../../poolModel';

import { SnackbarService } from 'src/app/_services/service/snackbar.service';

@Component({
  selector: 'app-edit-pool',
  templateUrl: './edit-pool.component.html'
})

export class EditPoolComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  // EditPoolForm Group
  editPoolForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  value = '';
  pool!: PoolModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private location: Location,
              private activated: ActivatedRoute,
              private poolService: PoolService,
              private snackbarService: SnackbarService) {
    this.editPoolForm = this.formBuilder.group({
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
    this.poolService.getPool(pid).subscribe(
      data => {
        this.pool = data
        this.value = this.pool.name;
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editPoolForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.editPoolForm.invalid) {
      return;
    } else {
      const typedEditPoolForm: PoolModel = this.editPoolForm.value;
      this.success = JSON.stringify(typedEditPoolForm);
      let lid = this.activated.snapshot.paramMap.get('id')
      this.poolService.updatePool(typedEditPoolForm, lid).subscribe(
        () => {
          const name = this.editPoolForm.get('name')?.value;
          this.snackbarService.showNotification('L\'équipement "' + this.value + '"' + ' a bien été renommé en "' + name + '".', 'modified');
        }
      )
      this.location.back()
    } 
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.editPoolForm.reset();
  }

  // Close editPoolComponent
  goBack(): void {
    this.location.back()
  }

}
