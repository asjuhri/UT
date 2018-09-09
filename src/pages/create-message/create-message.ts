import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
// import { AboutPage } from '../about/about';

/**
 * Generated class for the CreateMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-message',
  templateUrl: 'create-message.html',
})
export class CreateMessagePage {
  from            : string ;
  SendTo          : string ;
  Subject         : string ;
  Content         : string ;
  baseURI         : string;
  data            : Observable<any>;
  DataParam       : any = {};
  public loading = this.loadingCtrl.create({
    content: "Please wait...",
    // duration :1000
  });

  constructor(public viewCtrl : ViewController,public loadingCtrl:LoadingController,public http:HttpClient,public restProvider: RestProvider,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.baseURI = this.restProvider.baseURI;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMessagePage');
  }

  send() {
    const alerts = this.alertCtrl.create({
      title: 'Status',
      message: status,
      buttons: ['OK'],
      enableBackdropDismiss: false
    })
    alerts.present();
  }
  
  goSend(){
    if(!this.from){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field From .!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    }else if(!this.SendTo){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field To .!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    }else if(!this.Subject){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field Subject .!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    }else if(!this.Content){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field Content .!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    }else{
      this.loading.present()
      //====================== VIA STRINGFY  ============================//
        // this.DataParam['email']         = this.email;
        // let dataSend = new FormData();
        // dataSend.append('data',JSON.stringify(this.DataParam));
      //====================== END STRINGFY ============================//
    
      //====================== VIA VARIABLE ===========================//
            let dataSend = new FormData();
            dataSend.append('from',this.from);
            dataSend.append('sendto',this.SendTo);
            dataSend.append('subject',this.Subject);
            dataSend.append('content',this.Content);
            dataSend.append('action','post_msg');
       //====================== END STRINGFY ============================//
    
            this.data  = this.http.post(this.baseURI+'index.php/Cmessage', dataSend)
            this.data.subscribe(data =>{
              console.log(data);
              this.loading.dismiss()
              if(data.status ==true){
                // window.localStorage.setItem('storageUserLogin', data.user_name);
                // window.localStorage.setItem('storageNikLogin', data.nik);
                // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
                // window.localStorage.setItem('storageUserIdLogin', data.user_id);
                this.from ="";
                this.SendTo ="";
                this.Subject ="";
                this.Content ="";

                let alert = this.alertCtrl.create({
                  title: 'Information',
                  message: 'Message Send ..!',
                  buttons: [
                    {
                      text: 'OK',
                      handler: () => {
                        console.log('Ya clicked');
                       this.viewCtrl.dismiss()
                        // this.navCtrl.setRoot(AboutPage)
                       
                      }
                    }
                  ]
                });
                alert.present();
                
              }else{
                const alerts = this.alertCtrl.create({
                  title: 'Warning',
                  message:'Message Not Send ..!',
                  buttons:['OK'],
                  enableBackdropDismiss:false
                })
                this.loading.dismiss()
                alerts.present();
              }
            },error => {
              const alerts = this.alertCtrl.create({
                title: 'Warning',
                message:'Error Connection..!',
                buttons:['OK'],
                enableBackdropDismiss:false
              })
              this.loading.dismiss()
              alerts.present();
            });
    }
  }
  
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
