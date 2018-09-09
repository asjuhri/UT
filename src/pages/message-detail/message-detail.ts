import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html',
})
export class MessageDetailPage {
  items           : Array<{from:string,sendTo:string,subject:string,createDate:Date,content:string}>;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.items = [];
    this.items.push({
      from : navParams.data.data.from,
      sendTo : navParams.data.data.sendTo,
      subject : navParams.data.data.subject,
      content : navParams.data.data.content,
      createDate : navParams.data.data.createDate
    })
    console.log(this.items)

  }

  getParamFromListMsg(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageDetailPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
