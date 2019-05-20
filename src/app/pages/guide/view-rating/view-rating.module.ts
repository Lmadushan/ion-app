import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewRatingPage } from './view-rating.page';
import { StarRatingModule } from 'angular-star-rating';

const routes: Routes = [
  {
    path: '',
    component: ViewRatingPage
  }
];

@NgModule({
  imports: [
    StarRatingModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewRatingPage]
})
export class ViewRatingPageModule {}
