import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LawnmowerRoutingModule } from './lawnmower-routing.module';
import { LawnmowerComponent } from './component/lawnmower.component';


@NgModule({
  declarations: [
    LawnmowerComponent
  ],
  imports: [
    CommonModule,
    LawnmowerRoutingModule,
    FontAwesomeModule
  ]
})

export class LawnmowerModule { }
