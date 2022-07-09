import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { EditPortalComponent } from './components/editPortal/edit-portal.component';
import { PresenceSensorPipe } from './pipe/presence-sensor.pipe';
import { AddPortalComponent } from './components/addPortal/add-portal.component';

@NgModule({
  declarations: [
    PortalComponent,
    EditPortalComponent,
    PresenceSensorPipe,
    AddPortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    NgxPaginationModule
  ]
})

export class PortalModule { }
