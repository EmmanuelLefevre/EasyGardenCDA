import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LawnmowerComponent } from './components/lawnmower/lawnmower.component';
import { EditLawnmowerComponent } from './components/editLawnmower/edit-lawnmower.component';

const routes: Routes = [
  { path: '', component: LawnmowerComponent },
  { path: ':id', component: EditLawnmowerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LawnmowerRoutingModule { }
