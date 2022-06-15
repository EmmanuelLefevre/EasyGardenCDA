import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EasygardenRoutingModule } from './easygarden-routing.module';
import { ConfirmDialogModule } from './components/confirmDialog/confirmDialogModule/confirm-dialog.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GardenComponent } from './components/garden/components/garden/garden.component';
import { EditGardenComponent } from './components/garden/components/editGarden/edit-garden.component';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialogComponent/confirm-dialog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    EditGardenComponent,
    GardenComponent
  ],
  imports: [
    CommonModule,
    EasygardenRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmDialogModule,
    NgxPaginationModule
  ],
  entryComponents: [ConfirmDialogComponent]
})

export class EasygardenModule { }
