import { Component } from '@angular/core';
import { NavController, SegmentButton, AlertController, ModalController, PopoverController, LoadingController } from 'ionic-angular';
import { StatusBar } from '../../../node_modules/@ionic-native/status-bar';
import { CreateMessagePage } from '../create-message/create-message';
import { MessageDetailPage } from '../message-detail/message-detail';
import { PopoverPage } from '../popover/popover';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  whichSegment    : any;
  segment_active  : string;
  isCreateMessage : boolean = false;
  isSearching     : boolean = false;
  myInput         : string  ;
  baseURI         : string ;
  isPage          : string ="AboutPage"; 
  data            : Observable<any>;
  DataParam       : any = {};
  items           : Array<{from:string,sendTo:string,subject:string,createDate:Date,content:string}>;
  action          : string;
  searchMsg       : any ;

  // public loading = this.loadingCtrl.create({
  //   content: "Please wait...",
  //   // duration :1000
  // });


  constructor(public loadingCtrl:LoadingController,public http:HttpClient,public restProvider:RestProvider,public navCtrl: NavController, public statusBar: StatusBar, public modalCtrl: ModalController, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.whichSegment = "first";
    this.baseURI = this.restProvider.baseURI;
    this.closeSearchBox();
  }

  ionViewWillEnter() {
    this.getMessage()
  }

  onSegmentChange(segmentButton: SegmentButton) {
    this.segment_active = segmentButton.value;
    console.log(this.segment_active);
    if (this.segment_active == 'first') {
      this.whichSegment = "first";
      this.isCreateMessage = false;
      console.log('first')
    } else {
      console.log('second')
      this.whichSegment = "second";
      this.isCreateMessage = true;
    }
  }

  openSearchBox(event) {
    this.isSearching = true;
  }

  closeSearchBox() {
    this.isSearching = false;
    // this.searchMsg = 'undefined';
    this.searchMsg = '';
    this.getMessage()
  }

  goSearchMsg(){
    this.getMessage()
  }

  onCancel(e) {
    console.log('cancel');
    this.isSearching = false;
  }

  onInput(e) {
    console.log(e);
  }

  openPopup(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
    // popover.onDidDismiss((data) => {
    //   this.events.subscribe('dismiss', angka => {
    //     if (angka.data != undefined) {
    //       this.stillLoading = true;
    //       this.jadwal = {};
    //       this.waktuSalat = null;
    //       this.selisih = { value: null };
    //       this.getTime(angka.data.city);
    //       this.cityDesc = angka.data.desc;
    //       this.events.unsubscribe('dismiss')
    //     }
    //   })

    //   if (data == 'hideKutipan') this.hideIt = true;
    // });
  }

  toCreateMessage() {
    // this.navCtrl.push(CreateMessagePage);
    this.searchMsg='';
    let modal = this.modalCtrl.create(CreateMessagePage, { data: null }, { enableBackdropDismiss: true, cssClass: 'select-modal' });
    modal.present();

    modal.onDidDismiss((data) => {
     this.getMessage()
    })

  }

  toMessageDetail(event,item) {
    // console.log(item)
    let modal = this.modalCtrl.create(MessageDetailPage, { data: item }, { enableBackdropDismiss: true, cssClass: 'select-modal' });
    modal.present();
  }

  send(status) {
    console.log(status);
    const alerts = this.alertCtrl.create({
      title: 'Status',
      message: status,
      buttons: ['OK'],
      enableBackdropDismiss: false
    })
    alerts.present();
  }

  toSecondSegment() {
    this.whichSegment = "second";
  }

  getMessage(){
    // this.loading.present()
    // if (this)
    let load = this.loadingCtrl.create({
        content: "Please wait...",
      //   // duration :1000
    });
    load.present()
    this.action ="get_message";
    this.data  = this.http.get(this.baseURI+'index.php/Cmessage?action='+this.action+'&param='+this.searchMsg)
    this.data.subscribe(data =>{
    
    //  console.log(data.data[0].msg_from)
      if(data.status ==true){
        this.items = [];
        for (let i = 0; i <data.data.length; i++) {
          this.items.push({
              from        : data.data[i].msg_from,
              sendTo      : data.data[i].msg_to,
              subject     : data.data[i].msg_subject,
              content     : data.data[i].msg_content,
              createDate  : data.data[i].CreateDate
          });
        }
        load.dismiss()
        // this.loading.dismiss();
        
      }else if(data.status ==false){

        const alerts = this.alertCtrl.create({
          title: 'Warning',
          message:'Tidak Ada Data ..!',
          buttons:['OK'],
          enableBackdropDismiss:false
        })
        load.dismiss()
        // this.loading.dismiss()
        alerts.present();

      }else{

        const alerts = this.alertCtrl.create({
          title: 'Warning',
          message:'Gagal Load Data ..!',
          buttons:['OK'],
          enableBackdropDismiss:false
        })
        load.dismiss()
        // this.loading.dismiss()
        alerts.present();
      }
    },error => {
     
      const alerts = this.alertCtrl.create({
        title: 'Warning',
        message:'Error Connection..!',
        buttons:['OK'],
        enableBackdropDismiss:false
      })
      load.dismiss()
      // this.loading.dismiss()
      alerts.present();
    });
  }

}
