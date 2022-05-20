import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/guard/auth.guard';

import { ErrorComponent } from './services/utils/components/error/error.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
      .then(module => module.PublicModule)
  },
  {
    path: 'easygarden', loadChildren: () => import('./easygarden/easygarden.module')
      .then(module => module.EasygardenModule), canActivate:[AuthGuard]
  },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
