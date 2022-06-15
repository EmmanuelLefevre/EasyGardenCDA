import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LightningRoutingModule } from './lightning-routing.module';
import { LightningComponent } from './components/lightning/lightning.component';
import { EditLightningComponent } from './components/editLightning/edit-lightning.component';


@NgModule({
  declarations: [
    LightningComponent,
    EditLightningComponent
  ],
  imports: [
    CommonModule,
    LightningRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule
  ]
})

export class LightningModule { }
