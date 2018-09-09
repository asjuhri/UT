import { Component } from '@angular/core';
import { NavController, SegmentButton, AlertController, IonicPage, NavParams, PopoverController, ModalController, LoadingController } from 'ionic-angular';
// import { Camera,CameraOptions } from '@ionic-native/camera';
import { PopoverPage } from '../popover/popover';
import { CreateTicketPage } from '../create-ticket/create-ticket';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  whichSegment    : any;
  segment_active  : string;
  isSearching     : boolean = false;
  baseURI         : string ;
  isPage          : string ="TicketPage"; 
  data            : Observable<any>;
  DataParam       : any = {};
  items           : Array<{ticketSatatus:string,ticketNo:string,ticketAssign:string,ticketDesc:string,uriImge:string,createDate:Date}>;
  action          : string;
  searchTicket       : any ;

  constructor(public loadingCtrl:LoadingController,public restProvider :RestProvider,public http:HttpClient,public modalCtrl:ModalController,public popoverCtrl:PopoverController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.whichSegment = "first";
    this.baseURI = restProvider.baseURI
    // this.closeSearchBox();
  }

  openSearchBox() {
    this.isSearching = true;
  }

  ionViewWillEnter() {
    this.getTicket()
  }

  closeSearchBox() {
    this.isSearching = false;
    this.searchTicket = '';
    this.getTicket()
  }

  onCancel(e) {
    console.log('cancel');
    this.isSearching = false;
  }

  goSearchTciket(){
    this.getTicket()
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

  toCreateTicket() {
    this.searchTicket =''
    let profileModal = this.modalCtrl.create(CreateTicketPage);
    profileModal.present();

    profileModal.onDidDismiss((data) => {
      this.getTicket()
     })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
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

  toSecondSegment() {
    this.whichSegment = "second";
  }

  getTicket(){
    // this.loading.present()
    // if (this)
    let load = this.loadingCtrl.create({
        content: "Please wait...",
      //   // duration :1000
    });
    load.present()
    this.action ="get_ticket";
    this.data  = this.http.get(this.baseURI+'index.php/Cticket?action='+this.action+'&param='+this.searchTicket)
    this.data.subscribe(data =>{
    
    //  console.log(data.data[0].msg_from)
      if(data.status ==true){
        this.items = [];
        for (let i = 0; i <data.data.length; i++) {
          this.items.push({
              ticketAssign  : data.data[i].ticket_signTo,
              ticketDesc    : data.data[i].ticket_desc,
              ticketNo      : data.data[i].ticket_no,
              uriImge       : this.baseURI + data.data[i].url_img + '.png',
              createDate    : data.data[i].CreateDate,
              ticketSatatus : data.data[i].ticket_statusTrans
          });
        }
        console.log(this.items)
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
