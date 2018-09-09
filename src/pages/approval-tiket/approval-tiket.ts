import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, SegmentButton } from 'ionic-angular';

/**
 * Generated class for the ApprovalTiketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval-tiket',
  templateUrl: 'approval-tiket.html',
})
export class ApprovalTiketPage {
  whichSegment: any = 'first';
  segment_active: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalTiketPage');
  }

  onSegmentChange(segmentButton: SegmentButton) {
    this.segment_active = segmentButton.value;
    this.whichSegment = this.segment_active == 'first' ? 'first' : 'second';
  }

}
