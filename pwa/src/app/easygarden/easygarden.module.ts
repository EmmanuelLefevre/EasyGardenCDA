import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EasygardenRoutingModule } from './easygarden-routing.module';
import { ConfirmDialogModule } from './components/confirmDialog/confirmDialogModule/confirm-dialog.module';

import { GardenComponent } from './components/layout/garden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialogComponent/confirm-dialog.component';


@NgModule({
  declarations: [
    GardenComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EasygardenRoutingModule,
    FontAwesomeModule,
    ConfirmDialogModule
  ],
  entryComponents: [ConfirmDialogComponent]
})

export class EasygardenModule { }
