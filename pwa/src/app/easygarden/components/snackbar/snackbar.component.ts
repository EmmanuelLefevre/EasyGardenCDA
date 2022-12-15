import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { SnackbarInterceptor } from '../../../_services/utils/snackbar.interceptor';

// import { EditWateringComponent } from '../../../easygarden/modules/watering/components/editWatering/edit-watering.component';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})

export class SnackbarComponent implements OnInit {

  message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
              public dialogRef: MatDialogRef<SnackbarComponent>,
              public snackBar: MatSnackBar) { 
    this.message = data.message;
  }

  ngOnInit(): void {}

}
