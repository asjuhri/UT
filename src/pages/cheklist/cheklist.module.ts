import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheklistPage } from './cheklist';

@NgModule({
  declarations: [
    CheklistPage,
  ],
  imports: [
    IonicPageModule.forChild(CheklistPage),
  ],
})
export class CheklistPageModule {}
