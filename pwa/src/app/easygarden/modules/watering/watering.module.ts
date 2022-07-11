import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';

import { WateringRoutingModule } from './watering-routing.module';
import { WateringComponent } from './components/watering/watering.component';
import { EditWateringComponent } from './components/editWatering/edit-watering.component';
import { AddWateringComponent } from './components/addWatering/add-watering.component';


@NgModule({
  declarations: [
    WateringComponent,
    EditWateringComponent,
    AddWateringComponent
  ],
  imports: [
    CommonModule,
    WateringRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatSelectModule
  ]
})

export class WateringModule { }
