import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LightningComponent } from './components/lightning/lightning.component';
import { EditLightningComponent } from './components/editLightning/edit-lightning.component';

const routes: Routes = [
  { path: '', component: LightningComponent },
  { path: ':id', component: EditLightningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LightningRoutingModule { }
