import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './_services/utils/components/error/error.component';
import { SnackbarComponent } from './easygarden/components/snackbar/snackbar.component';

import { JWTInterceptorProvider } from './_services/utils/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  entryComponents: [
    SnackbarComponent
  ],
  providers: [
    JWTInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
