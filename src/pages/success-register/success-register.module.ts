import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessRegisterPage } from './success-register';

@NgModule({
  declarations: [
    SuccessRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessRegisterPage),
  ],
})
export class SuccessRegisterPageModule {}
