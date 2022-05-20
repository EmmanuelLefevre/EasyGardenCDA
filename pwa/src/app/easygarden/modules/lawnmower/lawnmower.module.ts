import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawnmowerRoutingModule } from './lawnmower-routing.module';
import { LawnmowerComponent } from './component/lawnmower.component';


@NgModule({
  declarations: [
    LawnmowerComponent
  ],
  imports: [
    CommonModule,
    LawnmowerRoutingModule
  ]
})

export class LawnmowerModule { }
