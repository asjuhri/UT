import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Camera,CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CreateTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-ticket',
  templateUrl: 'create-ticket.html',
})
export class CreateTicketPage {
  isHidden    : boolean = false;
  imageUri    : string  = ""; 
  scanCode    : string ;
  qrData      : any     = null;
  createdCode : any     = null;
  assignTo    : string;
  desc        : string;
  assetCode   : string;
  assetName   : string;
  area        : string;
  gedung      : string;
  lantai      : string;
  baseURI     : string;
  data        : Observable<any>;
  DataParam   : any = {};
  public loading = this.loadingCtrl.create({
    content: "Please wait...",
    // duration :1000
  });

  constructor(public http:HttpClient,public restProvider : RestProvider,public loadingCtrl:LoadingController,private barcodeScanner : BarcodeScanner ,public alertCtrl :AlertController,public camera:Camera,public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.baseURI = this.restProvider.baseURI;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTicketPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goSend(){
    if(!this.assignTo){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field SignTo .!',
        buttons: ['OK'],
        enableBackdropDismiss: false
      })
      alerts.present();
    }else if(!this.desc){
      const alerts = this.alertCtrl.create({
        title: 'Status',
        message: 'Please Input Field Desc .!',
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
            dataSend.append('asignTo',this.assignTo);
            dataSend.append('desc',this.desc);
            dataSend.append('imageUri',this.imageUri);
            dataSend.append('action','post_ticket');
       //====================== END STRINGFY ============================//
    
            this.data  = this.http.post(this.baseURI+'index.php/Cticket', dataSend)
            this.data.subscribe(data =>{
              console.log(data);
              this.loading.dismiss()
              if(data.status ==true){
                // window.localStorage.setItem('storageUserLogin', data.user_name);
                // window.localStorage.setItem('storageNikLogin', data.nik);
                // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
                // window.localStorage.setItem('storageUserIdLogin', data.user_id);
                this.assignTo ="";
                this.desc ="";

                let alert = this.alertCtrl.create({
                  title: 'Information',
                  message: 'Succesfull ..!',
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


  isUseBarcode() {
    this.isHidden = !this.isHidden;
  }

  openCamera(){
    console.log('camera open')
    // console.log(this.imageUri)
    // // this.imageUri = 'kkl'
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64 (DATA_URL):
    //  this.imageUri = 'data:image/jpeg;base64,' + imageData;
    // //  this.imageUri = base64Image;
    //  console.log(this.imageUri)
    // }, (err) => {
    //  // Handle error
    // });
    let  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


    this.camera.getPicture(options).then((imageData) => {
      this.imageUri = 'data:image/jpeg;base64,' + imageData;
      // this.imageUri = imageData;
      console.log(this.imageUri)
     
      }, (err) => {
        this.displayErrorAlert(err);
      });
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
  }


  // Scan Barcode
  scanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanCode = barcodeData.text;
      this.createdCode = this.scanCode
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  // createCode() {
  //   console.log('creatQR')
  //   this.createdCode = this.scanCode;
  // }

  // CreateQr(){

  // }

}
