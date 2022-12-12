import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;
  value: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
              public snackBar: MatSnackBar) {
    this.title = data.title;
    this.message = data.message;
    this.value = data.value ?? "";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  // Snackbar
  openSnackBar(_value: string, action: string) {
    this.snackBar.open('"' + this.value + '"' + ' a bien été supprimé.', action, {
      duration: 4000,
      panelClass: ['snackbar-animation'],
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  constructor(public title: string, public message: string, public value?: string) {
  }

}
