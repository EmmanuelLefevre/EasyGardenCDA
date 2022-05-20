import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WateringRoutingModule } from './watering-routing.module';
import { WateringComponent } from './component/watering/watering.component';


@NgModule({
  declarations: [
    WateringComponent
  ],
  imports: [
    CommonModule,
    WateringRoutingModule
  ]
})

export class WateringModule { }
