import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { PoolService } from '../../pool.service';
import { FormValidationService } from '../../../../../_services/service/form-validation.service';
import { PoolModel } from '../../poolModel';
import { UserModel } from '../../../../../_models/userModel';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpool',
  templateUrl: './add-pool.component.html',
  styleUrls: ['./add-pool.component.scss']
})

export class AddPoolComponent implements OnInit {

  title = 'Easy Garden';
  faCircleXmark = faCircleXmark;

  users: UserModel[] = [];

  // addPoolForm Group
  addPoolForm = new FormGroup({
    name: new FormControl('')
  });
  submitted = false;
  success = '';
  name = '';
  pool!: PoolModel;

  constructor(private formBuilder: FormBuilder,
              private customValidator : FormValidationService,
              private router: Router, 
              private location: Location,
              private poolService: PoolService,
              public snackBar: MatSnackBar) { 
    this.addPoolForm = this.formBuilder.group({
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
    this.fetchPools()
  }

    // Display Pools
    fetchPools(): void {
      this.poolService.getAllPools()
        .subscribe(
          (res:any) => {
            if (res.hasOwnProperty('hydra:member')) 
            this.users = res['hydra:member']
          }
        )
    }
  
    get f(): { [key: string]: AbstractControl } {
      return this.addPoolForm.controls;
    }
  
    // Submit button
    onSubmit() {
      this.submitted = true;
      if (this.addPoolForm.invalid) {
        return;
      } else {
        const typedAddPoolForm: PoolModel = this.addPoolForm.value;
        this.success = JSON.stringify(typedAddPoolForm);
        this.poolService.addPool(typedAddPoolForm).subscribe(
          () => {
            this.router.navigate(['/easygarden/pool'])
          }
        )
      }
    }
  
    // Cancel button
    onReset(): void {
      this.submitted = false;
      this.addPoolForm.reset();
    }
  
    // Close addPoolComponent
    goBack(): void {
      this.location.back()
    }

    // Snackbar
    openSnackBar(_name: string) {
      this.snackBar.open('L\'équipement "' + this.name + '"' + ' a bien été ajouté.', '', {
          duration: 4000,
          panelClass: ['snackbar-animation'],
          verticalPosition: 'bottom',
          horizontalPosition: 'start'
      });
    }

}
