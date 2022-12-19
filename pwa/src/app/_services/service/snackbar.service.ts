import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/easygarden/components/snackbar/snackbar.component';


@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(displayMessage: string, messageType: 'created' | 'modified' | 'deleted' | 'welcome') {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        message: displayMessage
      },
      duration: 4000,
      panelClass: messageType,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

}
