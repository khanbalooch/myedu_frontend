import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StepCardComponent } from '../components/step-card/step-card.component';
import { UppercaseFirstLetterDirective } from '../directives/UpperCaseFirstLetterDirective';
import { SharedModule } from '../components/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage, StepCardComponent, UppercaseFirstLetterDirective],
  
})
export class HomePageModule {}
