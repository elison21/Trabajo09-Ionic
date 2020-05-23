import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#0312b5",
      innerStrokeColor: "#03cbd9",
      animationDuration: 1000,
      animation: false,
      animateSubtitle: false,
      responsive: true,
      renderOnClick: false,
      clockwise: true,
      subtitle: 'Timer'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
