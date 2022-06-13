import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoolComponent } from './components/pool/pool.component';
import { EditPoolComponent } from './components/editPool/edit-pool.component';

const routes: Routes = [
  { path: '', component: PoolComponent },
  { path: ':id', component: EditPoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoolRoutingModule { }
