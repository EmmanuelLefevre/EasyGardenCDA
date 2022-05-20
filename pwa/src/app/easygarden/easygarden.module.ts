import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EasygardenRoutingModule } from './easygarden-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EasygardenRoutingModule
  ]
})

export class EasygardenModule { }
