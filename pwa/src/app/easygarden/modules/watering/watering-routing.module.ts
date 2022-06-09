import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WateringComponent } from './components/watering/watering.component';
import { EditWateringComponent } from './components/editWatering/edit-watering/edit-watering.component';

const routes: Routes = [
  { path: '', component: WateringComponent },
  { path: ':id', component: EditWateringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WateringRoutingModule { }
