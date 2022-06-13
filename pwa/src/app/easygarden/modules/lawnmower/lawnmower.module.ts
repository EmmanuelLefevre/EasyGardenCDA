import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LawnmowerRoutingModule } from './lawnmower-routing.module';
import { LawnmowerComponent } from './components/lawnmower/lawnmower.component';
import { EditLawnmowerComponent } from './components/editLawnmower/edit-lawnmower.component';


@NgModule({
  declarations: [
    LawnmowerComponent,
    EditLawnmowerComponent
  ],
  imports: [
    CommonModule,
    LawnmowerRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class LawnmowerModule { }
