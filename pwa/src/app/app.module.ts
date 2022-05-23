import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { JWTInterceptorProvider } from './_services/utils/jwt.interceptor';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './_services/utils/components/error/error.component';

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
    FontAwesomeModule
  ],
  providers: [JWTInterceptorProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
