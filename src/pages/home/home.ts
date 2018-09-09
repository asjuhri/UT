import { Component, ElementRef} from '@angular/core';
import { NavController, App, ViewController, ModalController, NavParams, SegmentButton, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsageDetailPage } from '../usage-detail/usage-detail';
import { MenusPage } from '../menus/menus';
// import { MyApp } from './app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// @Directive({
//   selector: 'ion-textarea[autosize]'
// })



export class HomePage {
  username: string;
  segment_active: string;
  whichSegment: any;
  isi: string;
  divisi: string;

  constructor(public element: ElementRef, public modalCtrl: ModalController, public alertCtrl: AlertController, public navParams: NavParams, public appCtrl: App, public viewCtrl: ViewController, public navCtrl: NavController) {
    this.username = window.localStorage.getItem('username');
    // this.username = navParams.data
    this.whichSegment = "first";
    console.log(this.username)
  }

  // @HostListener('input', ['$event.target'])
  // onInput(textArea: HTMLTextAreaElement): void {
  //   this.adjust();
  // }
  // ngOnInit(): void {
  //   setTimeout(() => this.adjust(), 0);
  // }

  // adjust(): void {
  //   let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
  // let area = this.element.nativeElement.getElementsByTagName('textarea')[0];
  // area.style.overflow ='hidden';
  // textArea.style.overflow = 'hidden';
  // textArea.style.height = 'auto';
  // textArea.style.height = textArea.scrollHeight + "px";
  // }

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

  send() {
    const alerts = this.alertCtrl.create({
      title: 'Information',
      message: 'Successfull ..!',
      buttons: ['OK'],
      enableBackdropDismiss: false
    })
    alerts.present();

    this.isi = ""
  }

  logout() {
    // this.menuController.close()
    this.navCtrl.push(LoginPage)
  }

  toUsageDetail() {
    let modal = this.modalCtrl.create(UsageDetailPage);
    modal.present();
  }

  toMenu() {
    let modal = this.modalCtrl.create(MenusPage);
    modal.present();
  }

}
