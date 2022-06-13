import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './components/pool/pool.component';


@NgModule({
  declarations: [
    PoolComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class PoolModule { }
