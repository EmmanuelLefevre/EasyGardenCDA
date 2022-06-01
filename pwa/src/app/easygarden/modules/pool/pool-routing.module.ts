import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoolComponent } from './component/pool/pool.component';

const routes: Routes = [
  { path: '', component: PoolComponent },
  { path: ':id', component: PoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoolRoutingModule { }
