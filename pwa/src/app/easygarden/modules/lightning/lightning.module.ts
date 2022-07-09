import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

import { LightningRoutingModule } from './lightning-routing.module';
import { LightningComponent } from './components/lightning/lightning.component';
import { EditLightningComponent } from './components/editLightning/edit-lightning.component';
import { AddLightningComponent } from './components/addLightning/add-lightning.component';


@NgModule({
  declarations: [
    LightningComponent,
    EditLightningComponent,
    AddLightningComponent
  ],
  imports: [
    CommonModule,
    LightningRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    NgxPaginationModule
  ]
})

export class LightningModule { }
