import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './components/pool/pool.component';


@NgModule({
  declarations: [
    PoolComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    FontAwesomeModule
  ]
})

export class PoolModule { }
