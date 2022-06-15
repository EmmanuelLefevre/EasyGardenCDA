import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './components/pool/pool.component';
import { EditPoolComponent } from './components/editPool/edit-pool.component';


@NgModule({
  declarations: [
    PoolComponent,
    EditPoolComponent
  ],
  imports: [
    CommonModule,
    PoolRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    NgxPaginationModule
  ]
})

export class PoolModule { }
