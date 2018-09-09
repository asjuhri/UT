import { Component } from '@angular/core';
import {  NavParams, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UsageDetailPage } from '../usage-detail/usage-detail';
import { ProfilPage } from '../profil/profil';
// import { MenusPage } from '../menus/menus';
import { TicketPage } from '../ticket/ticket';
// import { ApprovalTiketPage } from '../approval-tiket/approval-tiket';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UsageDetailPage;
  tab3Root = TicketPage;
  // tab3Root = ApprovalTiketPage;
  tab4Root = AboutPage;
  tab5Root = ProfilPage;


  username: string;

  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    this.username = navParams.data
    console.log(navParams.data)
    // const modal = this.modalCtrl.create(MenusPage);
    // modal.present();
  }
}
