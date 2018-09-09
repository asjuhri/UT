import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SuccessResetPage } from '../success-reset/success-reset';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  data                : Observable<any>;
  email               : string;
  DataParam           : any = {};
  baseUri             : string ;

  public loading = this.loadingCtrl.create({
    content: "Please wait...",
    // duration :1000
  });

  constructor(public loadingCtrl : LoadingController,public http:HttpClient,public restProvider: RestProvider,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.baseUri = this.restProvider.baseURI;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  toResetSuccess(){
    if(!this.email){
      const alerts = this.alertCtrl.create({
        title: 'Warning',
        message:'Lengkapi Email  ..!',
        buttons:['OK'],
        enableBackdropDismiss:false
      })
      alerts.present();
      this.email ="";

    }else{
//====================== VIA STRINGFY  ============================//
      this.loading.present()
      this.DataParam['email']         = this.email;
      let dataSend = new FormData();
      dataSend.append('data',JSON.stringify(this.DataParam));
//====================== END STRINGFY ============================//

//===================== VIA PER VARIABLE =========================//
      // let dataSend = new FormData();
      // dataSend.append('username',this.email);
      // dataSend.append('password',password);
//===================== END PER VARIABLE =========================//

      this.data  = this.http.post(this.baseUri+'index.php/Cforgotpass',dataSend)
      this.data.subscribe(data =>{
          console.log(data);
          if(data.status==true){
            this.navCtrl.push(SuccessResetPage);

            const alerts = this.alertCtrl.create({
              title: 'Information',
              message:'Cek Your Email ..!',
              buttons:['OK'],
              enableBackdropDismiss:false
            })
            this.loading.dismiss()
            alerts.present();
           
          }else{

            const alerts = this.alertCtrl.create({
              title: 'Warning',
              message:'ERROR | Not Send Password ..!',
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

}
