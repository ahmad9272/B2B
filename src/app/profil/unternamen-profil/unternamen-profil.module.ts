import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnternamenProfilPageRoutingModule } from './unternamen-profil-routing.module';

import { UnternamenProfilPage } from './unternamen-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnternamenProfilPageRoutingModule
  ],
  declarations: [UnternamenProfilPage]
})
export class UnternamenProfilPageModule {}
