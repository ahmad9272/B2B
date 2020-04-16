import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnternamenProfilPage } from './unternamen-profil.page';

const routes: Routes = [
  {
    path: '',
    component: UnternamenProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnternamenProfilPageRoutingModule {}
