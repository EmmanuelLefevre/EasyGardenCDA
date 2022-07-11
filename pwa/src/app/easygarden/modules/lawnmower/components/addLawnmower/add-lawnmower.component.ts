import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { LawnmowerService } from '../../lawnmower.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { LawnmowerModel } from '../../lawnmowerModel';
import { UserModel } from '../../../../../_models/userModel';

@Component({
  selector: 'app-add-lawnmower',
  templateUrl: './add-lawnmower.component.html',
  styleUrls: ['./add-lawnmower.component.scss']
})

export class AddLawnmowerComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addLawnmowerForm Group
  addLawnmowerForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  lawnmower!: LawnmowerModel;
  
  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private lawnmowerService: LawnmowerService) { 
    this.addLawnmowerForm = this.formBuilder.group({
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
    this.fetchLawnmowers()
  }

  // Display Gardens
  fetchLawnmowers(): void {
    this.lawnmowerService.getAllLawnmowers()
      .subscribe(
        (res:any) => {
          if (res.hasOwnProperty('hydra:member')) 
          this.users = res['hydra:member']
        }
      )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addLawnmowerForm.controls;
  }

  // Submit button
  onSubmit() {
    this.submitted = true;
    if (this.addLawnmowerForm.invalid) {
      return;
    } else {
      const typedAddLawnmowerForm: LawnmowerModel = this.addLawnmowerForm.value;
      this.success = JSON.stringify(typedAddLawnmowerForm);
      this.lawnmowerService.addLawnmower(typedAddLawnmowerForm).subscribe(
        () => {
          this.router.navigate(['/easygarden/lawnmower'])
        }
      )
    }
  }

  // Cancel button
  onReset(): void {
    this.submitted = false;
    this.addLawnmowerForm.reset();
  }

  // Close addLawnmowerComponent
  goBack(): void {
    this.location.back()
  }

}
