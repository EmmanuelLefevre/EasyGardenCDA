import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LawnmowerComponent } from './component/lawnmower.component';

const routes: Routes = [
  { path: '', component: LawnmowerComponent },
  { path: ':id', component: LawnmowerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LawnmowerRoutingModule { }
