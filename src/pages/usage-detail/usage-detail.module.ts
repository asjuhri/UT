import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsageDetailPage } from './usage-detail';

@NgModule({
  declarations: [
    UsageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UsageDetailPage),
  ],
})
export class UsageDetailPageModule {}
