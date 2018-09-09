import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SuccessRegisterPage } from '../success-register/success-register';

import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ResgisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resgister',
  templateUrl: 'resgister.html',
})
export class ResgisterPage {
  nama        : string;
  perusahaan  : string;
  divisi      : string;
  email       : string;
  password    : string;
  constructor(public restProvider: RestProvider,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResgisterPage');
  }

  toLoginPage() {
    this.restProvider.msg_error(this.email)
    // this.navCtrl.push(LoginPage)
  }

  login() {
    this.navCtrl.push(LoginPage)
    // console.log(this.Nama)
    // const alerts = this.alertCtrl.create({
    //   title: 'Warning',
    //   message:'Input Username !',
    //   buttons:['OK'],
    //   enableBackdropDismiss:false
    // })
    // alerts.present();
  }

  register() {
    if (!this.nama || !this.perusahaan || !this.divisi || !this.email || !this.password) {
      const alerts = this.alertCtrl.create({
        title: 'Error',
        message: 'Input text kosong..!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    } else {
      this.navCtrl.push(SuccessRegisterPage);
    }
  }

  toForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
