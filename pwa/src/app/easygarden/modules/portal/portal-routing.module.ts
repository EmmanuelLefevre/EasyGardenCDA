import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from './components/portal/portal.component';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: ':id', component: PortalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortalRoutingModule { }
