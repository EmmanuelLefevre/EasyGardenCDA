import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './component/pool/pool.component';


@NgModule({
  declarations: [
    PoolComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule
  ]
})

export class PoolModule { }
