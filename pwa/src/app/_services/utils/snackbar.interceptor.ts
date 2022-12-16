import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/easygarden/components/snackbar/snackbarComponent/snackbar.component';


// @Injectable({
//   providedIn: 'root'
// })

// export class SnackbarInterceptor implements HttpInterceptor {

//   showNotification: any;
//   displayMessage: string;

//   constructor(private snackbar: MatSnackBar,
//               public dialogRef: MatDialogRef<SnackbarComponent>,
//               @Inject(MAT_DIALOG_DATA) public data: SnackbarModel) { 
//                 this.displayMessage = data.message;
//               }

//   // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//   //   return next.handle(request).pipe(
//   //     tap(response => {
//   //       if (request.method == "POST" || request.method == "PUT" || request.method == "DELETE")
//   //         if (response instanceof HttpResponse && (response.status == 200 || response.status == 201 || response.status == 204)) {
//   //           this.snackBar.open('Saved successfully.', '', {
//   //             duration: 4000,
//   //             panelClass: ['snackbar-animation'],
//   //             verticalPosition: 'bottom',
//   //             horizontalPosition: 'start'
//   //           });
//   //         }
//   //     })
//   //   );
//   // }
//   // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//   //   return next.handle(request).pipe(
//   //     tap(response => {
//   //       if (request.method == "POST" || request.method == "PUT" || request.method == "DELETE")
//   //         if (response instanceof HttpResponse && (response.status == 200 || response.status == 201 || response.status == 204)) {
//   //           this.showNotification(this.displayMessage: SnackbarModel) {
//   //             this.snackbar.openFromComponent(SnackbarComponent, {
//   //               data: {
//   //                 message: this.displayMessage
//   //               },
//   //               duration: 4000,
//   //               panelClass: ['snackbar-animation'],
//   //               verticalPosition: 'bottom',
//   //               horizontalPosition: 'start'
//   //             });
//   //           }
//   //         }
//   //     })
//   //   );
//   // }

// }

// export const SnackbarInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: SnackbarInterceptor,
//   multi: true
// }

// /**
//  * Class to represent confirm snackbar model.
//  *
//  * It has been kept here to keep it as part of shared component.
//  */
//  export class SnackbarModel {

//   constructor(public message: string) {}

// }