import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EasygardenRoutingModule } from './easygarden-routing.module';

import { GardenComponent } from './components/layout/garden.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    GardenComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EasygardenRoutingModule,
    FontAwesomeModule
  ]
})

export class EasygardenModule { }
