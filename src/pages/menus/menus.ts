import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JadwalMaintanancePage } from '../jadwal-maintanance/jadwal-maintanance';
// import { CheklistPage } from '../cheklist/cheklist';


/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {

  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

  openPage(page) {
    // console.log(page)

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  // toChecklistPage() {
  //   this.navCtrl.push(CheklistPage)
  // }

  toJadwalMaintanance() {
    this.navCtrl.push(JadwalMaintanancePage);
  }
}
