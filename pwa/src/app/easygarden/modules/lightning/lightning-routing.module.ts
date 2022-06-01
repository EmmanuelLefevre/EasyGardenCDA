import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LightningComponent } from './components/lightning/lightning.component';

const routes: Routes = [
  { path: '', component: LightningComponent },
  { path: ':id', component: LightningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LightningRoutingModule { }
