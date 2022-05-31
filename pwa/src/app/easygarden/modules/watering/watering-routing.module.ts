import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WateringComponent } from './component/watering/watering.component';

const routes: Routes = [
  { path: '', component: WateringComponent },
  { path: ':id', component: WateringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WateringRoutingModule { }
