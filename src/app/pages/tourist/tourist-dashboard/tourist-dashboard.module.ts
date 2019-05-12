import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TouristDashboardPage } from './tourist-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TouristDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TouristDashboardPage]
})
export class TouristDashboardPageModule {}
