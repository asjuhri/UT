import { Component } from '@angular/core';
import { NavController, SegmentButton, AlertController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CheklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cheklist',
  templateUrl: 'cheklist.html',
})
export class CheklistPage {
  whichSegment: any;
  segment_active: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.whichSegment = "first";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheklistPage');
  }

  onSegmentChange(segmentButton: SegmentButton) {
    this.segment_active = segmentButton.value;
    console.log(this.segment_active);
    if (this.segment_active == 'first') {
      this.whichSegment = "first";
      console.log('first')
    } else {
      console.log('second')
      this.whichSegment = "second";
    }
  }

  status(status) {
    console.log(status);
    const alerts = this.alertCtrl.create({
      title: 'Status',
      message: status,
      buttons: ['OK'],
      enableBackdropDismiss: false
    })
    alerts.present();
  }

}
