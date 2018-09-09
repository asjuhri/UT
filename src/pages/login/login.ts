import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ResgisterPage } from '../resgister/resgister';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
// import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  baseURI         : string;
  password        : string;
  email           : string;
  data            : Observable<any>;
  DataParam       : any = {};
  public loading = this.loadingCtrl.create({
    content: "Please wait...",
    // duration :1000
  });

  constructor(public loadingCtrl: LoadingController,public http:HttpClient,public restProvider: RestProvider,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.baseURI = this.restProvider.baseURI;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // loading(){
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     // duration: 1000
  //   });
  //   loader.present();
  // }

  login() {
    this.loading.present()
    // this.loading
    if (!this.email) {
      const alerts = this.alertCtrl.create({
        title: 'Warning',
        message: 'Lengkapi Email ..!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      this.loading.dismiss()
      alerts.present();
      this.email = ""
      
    } else if (!this.password) {
      const alerts = this.alertCtrl.create({

        title: 'Warning',
        message: 'Lengkapi Password..!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      this.loading.dismiss()
      alerts.present();
      this.password = ""
    } else {
      this.loading.dismiss()
      // this.goLogin(this.email,this.password)
      this.navCtrl.push(TabsPage)
    }
  }

 goLogin(email,password){
  //====================== VIA STRINGFY  ============================//
    // this.DataParam['email']         = this.email;
    // let dataSend = new FormData();
    // dataSend.append('data',JSON.stringify(this.DataParam));
  //====================== END STRINGFY ============================//

  //====================== VIA VARIABLE ===========================//
        let dataSend = new FormData();
        dataSend.append('username',email);
        dataSend.append('password',password);
        dataSend.append('action','proses_login');
   //====================== END STRINGFY ============================//

        this.data  = this.http.post(this.baseURI+'index.php/Clogin', dataSend)
        this.data.subscribe(data =>{
          console.log(data);
          this.loading.dismiss()
          if(data.status ==true){
            // window.localStorage.setItem('storageUserLogin', data.user_name);
            // window.localStorage.setItem('storageNikLogin', data.nik);
            // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
            // window.localStorage.setItem('storageUserIdLogin', data.user_id);
            this.email ="";
            this.password ="";
            this.navCtrl.push(TabsPage)
          }else{
            const alerts = this.alertCtrl.create({
              title: 'Warning',
              message:'User or Password Salah ..!',
              buttons:['OK'],
              enableBackdropDismiss:false
            })
            alerts.present();
          }
        },error => {
          this.loading.dismiss();
          const alerts = this.alertCtrl.create({
            title: 'Warning',
            message:'Error Connection..!',
            buttons:['OK'],
            enableBackdropDismiss:false
          })
          alerts.present();
        });
  }

  register() {
    this.navCtrl.push(ResgisterPage)
  }

  toForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
    console.log('hai');
  }

}
