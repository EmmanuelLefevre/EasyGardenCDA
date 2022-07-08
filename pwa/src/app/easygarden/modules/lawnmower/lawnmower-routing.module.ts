import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LawnmowerComponent } from './components/lawnmower/lawnmower.component';
import { EditLawnmowerComponent } from './components/editLawnmower/edit-lawnmower.component';
import { AddLawnmowerComponent } from './components/addLawnmower/add-lawnmower.component';

const routes: Routes = [
  { path: '', component: LawnmowerComponent },
  { path: 'edit/:id', component: EditLawnmowerComponent },
  { path: 'add', component: AddLawnmowerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LawnmowerRoutingModule { }
