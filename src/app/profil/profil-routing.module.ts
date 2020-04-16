import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  
  {
    path: 'unternamen-profil',
    loadChildren: () => import('../Profil/unternamen-profil/unternamen-profil.module').then( m => m.UnternamenProfilPageModule)
  },
  {
    path: 'user-profil',
    loadChildren: () => import('../Profil/user-profil/user-profil.module').then( m => m.UserProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
