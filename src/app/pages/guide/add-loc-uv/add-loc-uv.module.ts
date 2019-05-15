import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddLocUvPage } from './add-loc-uv.page';

const routes: Routes = [
  {
    path: '',
    component: AddLocUvPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddLocUvPage]
})
export class AddLocUvPageModule {}
