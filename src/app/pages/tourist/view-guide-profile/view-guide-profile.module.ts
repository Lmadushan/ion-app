import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewGuideProfilePage } from './view-guide-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGuideProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewGuideProfilePage]
})
export class ViewGuideProfilePageModule {}
