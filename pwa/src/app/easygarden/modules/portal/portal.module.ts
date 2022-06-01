import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './component/portal/portal.component';


@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FontAwesomeModule
  ]
})

export class PortalModule { }
