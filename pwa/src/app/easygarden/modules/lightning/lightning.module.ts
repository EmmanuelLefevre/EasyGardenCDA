import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LightningRoutingModule } from './lightning-routing.module';
import { LightningComponent } from './components/lightning/lightning.component';


@NgModule({
  declarations: [
    LightningComponent
  ],
  imports: [
    CommonModule,
    LightningRoutingModule,
    FontAwesomeModule
  ]
})

export class LightningModule { }
