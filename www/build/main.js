webpackJsonp([16],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AboutPage } from '../about/about';
/**
 * Generated class for the CreateMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMessagePage = /** @class */ (function () {
    function CreateMessagePage(viewCtrl, loadingCtrl, http, restProvider, navCtrl, navParams, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.DataParam = {};
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.baseURI = this.restProvider.baseURI;
    }
    CreateMessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMessagePage');
    };
    CreateMessagePage.prototype.send = function () {
        var alerts = this.alertCtrl.create({
            title: 'Status',
            message: status,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
    };
    CreateMessagePage.prototype.goSend = function () {
        var _this = this;
        if (!this.from) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field From .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else if (!this.SendTo) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field To .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else if (!this.Subject) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field Subject .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else if (!this.Content) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field Content .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else {
            this.loading.present();
            //====================== VIA STRINGFY  ============================//
            // this.DataParam['email']         = this.email;
            // let dataSend = new FormData();
            // dataSend.append('data',JSON.stringify(this.DataParam));
            //====================== END STRINGFY ============================//
            //====================== VIA VARIABLE ===========================//
            var dataSend = new FormData();
            dataSend.append('from', this.from);
            dataSend.append('sendto', this.SendTo);
            dataSend.append('subject', this.Subject);
            dataSend.append('content', this.Content);
            dataSend.append('action', 'post_msg');
            //====================== END STRINGFY ============================//
            this.data = this.http.post(this.baseURI + 'index.php/Cmessage', dataSend);
            this.data.subscribe(function (data) {
                console.log(data);
                _this.loading.dismiss();
                if (data.status == true) {
                    // window.localStorage.setItem('storageUserLogin', data.user_name);
                    // window.localStorage.setItem('storageNikLogin', data.nik);
                    // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
                    // window.localStorage.setItem('storageUserIdLogin', data.user_id);
                    _this.from = "";
                    _this.SendTo = "";
                    _this.Subject = "";
                    _this.Content = "";
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Information',
                        message: 'Message Send ..!',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('Ya clicked');
                                    _this.viewCtrl.dismiss();
                                    // this.navCtrl.setRoot(AboutPage)
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    var alerts = _this.alertCtrl.create({
                        title: 'Warning',
                        message: 'Message Not Send ..!',
                        buttons: ['OK'],
                        enableBackdropDismiss: false
                    });
                    _this.loading.dismiss();
                    alerts.present();
                }
            }, function (error) {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Error Connection..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                _this.loading.dismiss();
                alerts.present();
            });
        }
    };
    CreateMessagePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-message',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\create-message\create-message.html"*/'<!--\n  Generated template for the CreateMessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="red">\n    <ion-buttons  left>\n        <button ion-button (tap)="closeModal()" icon-only>\n          <ion-icon  ios="ios-arrow-back" md="md-arrow-back" ></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title padding-center>Create Message</ion-title>\n    <ion-buttons end padding-right>\n      <button ion-button (tap)="goSend()" icon-only>\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="display:flex;border-bottom: 1px solid #eee;">\n    <p style="flex:1;color: #666">From</p>\n    <!-- <p style="flex:2">Eko Bag. Warehouse</p> -->\n    <ion-input type="text" [(ngModel)]="from" name="From" placeholder="From"></ion-input>\n  </div>\n\n  <div style="border-bottom: 1px solid #eee;">\n    <ion-input type="text" [(ngModel)]="SendTo" name="SendTo" placeholder="Send To"></ion-input>\n  </div>\n\n  <div style="border-bottom: 1px solid #eee;">\n    <ion-input type="text" name="subject" [(ngModel)]="Subject" placeholder="Subject"></ion-input>\n  </div>\n\n  <div>\n    <ion-input type="text" name="content" [(ngModel)]="Content" placeholder="Create Message"></ion-input>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\create-message\create-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateMessagePage);
    return CreateMessagePage;
}());

//# sourceMappingURL=create-message.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CreateTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTicketPage = /** @class */ (function () {
    function CreateTicketPage(http, restProvider, loadingCtrl, barcodeScanner, alertCtrl, camera, navCtrl, viewCtrl, navParams) {
        this.http = http;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.isHidden = false;
        this.imageUri = "";
        this.qrData = null;
        this.createdCode = null;
        this.DataParam = {};
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.baseURI = this.restProvider.baseURI;
    }
    CreateTicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTicketPage');
    };
    CreateTicketPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateTicketPage.prototype.goSend = function () {
        var _this = this;
        if (!this.assignTo) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field SignTo .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else if (!this.desc) {
            var alerts = this.alertCtrl.create({
                title: 'Status',
                message: 'Please Input Field Desc .!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else {
            this.loading.present();
            //====================== VIA STRINGFY  ============================//
            // this.DataParam['email']         = this.email;
            // let dataSend = new FormData();
            // dataSend.append('data',JSON.stringify(this.DataParam));
            //====================== END STRINGFY ============================//
            //====================== VIA VARIABLE ===========================//
            var dataSend = new FormData();
            dataSend.append('asignTo', this.assignTo);
            dataSend.append('desc', this.desc);
            dataSend.append('imageUri', this.imageUri);
            dataSend.append('action', 'post_ticket');
            //====================== END STRINGFY ============================//
            this.data = this.http.post(this.baseURI + 'index.php/Cticket', dataSend);
            this.data.subscribe(function (data) {
                console.log(data);
                _this.loading.dismiss();
                if (data.status == true) {
                    // window.localStorage.setItem('storageUserLogin', data.user_name);
                    // window.localStorage.setItem('storageNikLogin', data.nik);
                    // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
                    // window.localStorage.setItem('storageUserIdLogin', data.user_id);
                    _this.assignTo = "";
                    _this.desc = "";
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Information',
                        message: 'Succesfull ..!',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('Ya clicked');
                                    _this.viewCtrl.dismiss();
                                    // this.navCtrl.setRoot(AboutPage)
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    var alerts = _this.alertCtrl.create({
                        title: 'Warning',
                        message: 'Message Not Send ..!',
                        buttons: ['OK'],
                        enableBackdropDismiss: false
                    });
                    _this.loading.dismiss();
                    alerts.present();
                }
            }, function (error) {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Error Connection..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                _this.loading.dismiss();
                alerts.present();
            });
        }
    };
    CreateTicketPage.prototype.isUseBarcode = function () {
        this.isHidden = !this.isHidden;
    };
    CreateTicketPage.prototype.openCamera = function () {
        var _this = this;
        console.log('camera open');
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
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageUri = 'data:image/jpeg;base64,' + imageData;
            // this.imageUri = imageData;
            console.log(_this.imageUri);
        }, function (err) {
            _this.displayErrorAlert(err);
        });
    };
    CreateTicketPage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    // Scan Barcode
    CreateTicketPage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scanCode = barcodeData.text;
            _this.createdCode = _this.scanCode;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    CreateTicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-ticket',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\create-ticket\create-ticket.html"*/'<!--\n  Generated template for the CreateTicketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="red">\n    <ion-buttons left>\n      <button ion-button (tap)="closeModal()" icon-only>\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Create Ticket</ion-title>\n    <ion-buttons end padding-right>\n      <button ion-button (tap)="goSend()" icon-only>\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="display:flex;margin-bottom:5px">\n    <ion-checkbox [(ngModel)]="checkbox" (ionChange)="isUseBarcode()" style="flex:0;margin-right:5px"></ion-checkbox>\n    <span style="flex:1">No Barcode ?</span>\n  </div>\n  <!-- <div style="display:flex;" (click)="scanBarcode()" *ngIf="createdCode">\n    <div style="flex:1">\n     \n    </div>\n  </div> -->\n\n  <div style="display:flex;" >\n    <div style="flex:1" (click)="scanBarcode()" *ngIf="!createdCode">\n      <img src="../../assets/imgs/6381.jpg" (click)="scanBarcode()" style="border-radius:4px" />\n      <div style="text-align:center">\n        <span  (click)="scanBarcode()">Tap to Scan Barcode</span>\n      </div>\n    </div>\n    <div style="flex:1" *ngIf="createdCode">\n      <ion-card >\n        <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n        <ion-card-content>\n          <p>{{ createdCode }}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div style="flex:1;padding-left: 35px;" (click)="openCamera()" >\n      <img src="../../assets/imgs/OH5IPN0.jpg" style="border-radius:4px" *ngIf="imageUri===\'\'" />\n      <ion-card *ngIf="imageUri">\n        <ion-card-content>\n          <img [src]="imageUri"  style="border-radius:4px"  />\n        </ion-card-content>\n      </ion-card>\n      <!-- <img style="display:none;" id="largeImage" src="" /> -->\n      <div style="text-align:center">\n        <span (click)="openCamera()"  *ngIf="imageUri===\'\'">Tap to Take Picture</span>\n      </div>\n    </div>\n  </div>\n\n  <div style="display:flex;margin-top:15px;margin-bottom:10px">\n    <span style="flex:1;align-self:center">Assign To</span>\n    <ion-input type="text" name="assign-to" [(ngModel)]="assignTo" placeholder="Assign To" style="flex:2;border:1px solid #eee;border-radius:4px"></ion-input>\n  </div>\n  <div style="display:flex">\n    <span style="flex:1;padding-top:10px">Description</span>\n    <ion-textarea type="text" name="assign-to" rows="5" [(ngModel)]="desc" placeholder="Type description incidental maintanance here.." style="flex:2;border:1px solid #eee;border-radius:4px"></ion-textarea>\n  </div>\n\n  <div *ngIf="isHidden" style="background-color: #f8f9ff;margin-top: 15px;border-radius: 5px;padding: 10px;">\n    <span style="font-weight:bold;">Deskripsi Asset</span>\n    <div style="display:flex;margin-bottom:7px;margin-top:15px">\n      <span style="flex:1;padding-top:10px;color:#666">Kode Asset</span>\n      <ion-input type="text" name="assign-to" [(ngModel)]="assetCode" style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n    <div style="display:flex;margin-bottom:7px">\n      <span style="flex:1;padding-top:10px;color:#666">Serial Number</span>\n      <ion-input type="text" name="assign-to"  [(ngModel)]="scanCode"  style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n    <div style="display:flex;margin-bottom:7px">\n      <span style="flex:1;padding-top:10px;color:#666">Nama Asset</span>\n      <ion-input type="text" name="assign-to" [(ngModel)]="assetName" style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n    <div style="display:flex;margin-bottom:7px">\n      <span style="flex:1;padding-top:10px;color:#666">Area</span>\n      <ion-input type="text" name="assign-to" [(ngModel)]="area" style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n    <div style="display:flex;margin-bottom:7px">\n      <span style="flex:1;padding-top:10px;color:#666">Gedung</span>\n      <ion-input type="text" name="assign-to" [(ngModel)]="gedung" style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n    <div style="display:flex;margin-bottom:7px">\n      <span style="flex:1;padding-top:10px;color:#666">Lantai</span>\n      <ion-input type="text" name="assign-to" [(ngModel)]="lantai" style="flex:2;border:1px solid #818181;;height: 35px;border-radius:4px"></ion-input>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\create-ticket\create-ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CreateTicketPage);
    return CreateTicketPage;
}());

//# sourceMappingURL=create-ticket.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SuccessResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuccessResetPage = /** @class */ (function () {
    function SuccessResetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuccessResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessResetPage');
    };
    SuccessResetPage.prototype.toLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SuccessResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success-reset',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\success-reset\success-reset.html"*/'<!--\n  Generated template for the SuccessResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <div id="image-container">\n    <img src="../../assets/imgs/ut-in-login.png" />\n  </div>\n\n  <div id="image-success-container">\n    <img src="../../assets/imgs/download.png" />\n  </div>\n\n  <h4 style="text-align:center">Cek Email Please.....</h4>\n\n  <div id="button-container">\n    <button ion-button style="background-color:#FDD400" round (tap)="toLoginPage()">BACK</button>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\success-reset\success-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SuccessResetPage);
    return SuccessResetPage;
}());

//# sourceMappingURL=success-reset.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageDetailPage = /** @class */ (function () {
    function MessageDetailPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.items = [];
        this.items.push({
            from: navParams.data.data.from,
            sendTo: navParams.data.data.sendTo,
            subject: navParams.data.data.subject,
            content: navParams.data.data.content,
            createDate: navParams.data.data.createDate
        });
        console.log(this.items);
    }
    MessageDetailPage.prototype.getParamFromListMsg = function () {
    };
    MessageDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageDetailPage');
    };
    MessageDetailPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MessageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-detail',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\message-detail\message-detail.html"*/'<!--\n  Generated template for the MessageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="red">\n      <ion-buttons  left>\n          <button ion-button (tap)="closeModal()" icon-only>\n            <ion-icon  ios="ios-arrow-back" md="md-arrow-back" ></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title padding-center>Detail Message</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding tappable (tap)="closeModal()" *ngFor="let item of items">\n  <div style="display:flex;margin-bottom:10px">\n    <span style="flex:1;color: #666">From</span>\n    <span style="flex:2">: {{item.from}}</span>\n  </div>\n\n  <div style="display:flex;margin-bottom:10px">\n    <span style="flex:1;color: #666">Subject</span>\n    <span style="flex:2">: {{item.subject}}</span>\n  </div>\n\n  <div style="display:flex;margin-bottom:20px">\n    <span style="flex:1;color:#666">Date </span>\n    <span style="flex:2">: {{item.createDate}}</span>\n  </div>\n\n  <div style="text-align:justify">\n    <span>{{item.content}}\n    </span>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\message-detail\message-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MessageDetailPage);
    return MessageDetailPage;
}());

//# sourceMappingURL=message-detail.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jadwal_maintanance_jadwal_maintanance__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CheklistPage } from '../cheklist/cheklist';
/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenusPage = /** @class */ (function () {
    function MenusPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenusPage');
    };
    MenusPage.prototype.openPage = function (page) {
        // console.log(page)
    };
    MenusPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    // toChecklistPage() {
    //   this.navCtrl.push(CheklistPage)
    // }
    MenusPage.prototype.toJadwalMaintanance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jadwal_maintanance_jadwal_maintanance__["a" /* JadwalMaintanancePage */]);
    };
    MenusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menus',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\menus\menus.html"*/'<ion-header>\n  <ion-navbar color="red">\n      <ion-buttons left>\n          <button ion-button (tap)="closeModal()" icon-only>\n            <ion-icon name="md-arrow-round-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Dashboard Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div style="display: flex;flex-wrap: wrap;height: 100%;align-content: center;">\n    <div class="menu-container">\n      <div tappable (tap)="toJadwalMaintanance()" class="menu-item-container">\n        <img style="max-width: 40%;margin-bottom: 10px" src="../../assets/imgs/engineering.png" />\n        <span>Regular Maintanance</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 40%;margin-bottom: 10px" src="../../assets/imgs/save-energy.png" />\n        <span>Energy Consumptions</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 40%;margin-bottom: 10px" src="../../assets/imgs/faucet.png" />\n        <span>Water Consumptions</span>\n      </div>\n    </div>\n\n    <div class="menu-container">\n      <div class="menu-item-container">\n        <img style="max-width: 40%;margin-bottom: 10px" src="../../assets/imgs/gas-pump.png" />\n        <span>Fuel Consumption</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 33%;margin-bottom: 10px" src="../../assets/imgs/presentation.png" />\n        <span>Performance Productivity</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 43%;margin-bottom: 10px" src="../../assets/imgs/stock.png" />\n        <span>Physical</span>\n        <span>Availability</span>\n      </div>\n    </div>\n\n    <div class="menu-container">\n      <div class="menu-item-container">\n        <img style="max-width: 47%;flex:0;margin-bottom: 10px" src="../../assets/imgs/comparison.png" />\n        <span>Tren</span>\n        <span>Analysis</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 40%;flex:0;margin-bottom: 10px" src="../../assets/imgs/chainsaw.png" />\n        <span>Power Quality Dasboard</span>\n      </div>\n      <div class="menu-item-container">\n        <img style="max-width: 51%;flex:0; margin-bottom: 10px" src="../../assets/imgs/question.png" />\n        <span>Help</span>\n        <span>Support</span>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\menus\menus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JadwalMaintanancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JadwalMaintanancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JadwalMaintanancePage = /** @class */ (function () {
    function JadwalMaintanancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JadwalMaintanancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JadwalMaintanancePage');
    };
    JadwalMaintanancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jadwal-maintanance',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\jadwal-maintanance\jadwal-maintanance.html"*/'<!--\n  Generated template for the JadwalMaintanancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="UT">\n    <ion-title ></ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!-- <ion-header no-border>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n</ion-header> -->\n\n\n<ion-content padding>\n  <h2>Jadwal Maintanance</h2>\n\n  <div id="input-container">\n    <ion-input type="text" placeholder="Search Maintanance Schedule"></ion-input>\n    <ion-icon name="search"></ion-icon>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\jadwal-maintanance\jadwal-maintanance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], JadwalMaintanancePage);
    return JadwalMaintanancePage;
}());

//# sourceMappingURL=jadwal-maintanance.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="red">\n    <ion-title>Profil</ion-title>\n    <ion-buttons end padding-right>\n      <button ion-button (tap)="logout()" icon-only>\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_ticket_create_ticket__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Camera,CameraOptions } from '@ionic-native/camera';




/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketPage = /** @class */ (function () {
    function TicketPage(loadingCtrl, restProvider, http, modalCtrl, popoverCtrl, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isSearching = false;
        this.isPage = "TicketPage";
        this.DataParam = {};
        this.whichSegment = "first";
        this.baseURI = restProvider.baseURI;
        // this.closeSearchBox();
    }
    TicketPage.prototype.openSearchBox = function () {
        this.isSearching = true;
    };
    TicketPage.prototype.ionViewWillEnter = function () {
        this.getTicket();
    };
    TicketPage.prototype.closeSearchBox = function () {
        this.isSearching = false;
        this.searchTicket = '';
        this.getTicket();
    };
    TicketPage.prototype.onCancel = function (e) {
        console.log('cancel');
        this.isSearching = false;
    };
    TicketPage.prototype.goSearchTciket = function () {
        this.getTicket();
    };
    TicketPage.prototype.onInput = function (e) {
        console.log(e);
    };
    TicketPage.prototype.openPopup = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
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
    };
    TicketPage.prototype.toCreateTicket = function () {
        var _this = this;
        this.searchTicket = '';
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__create_ticket_create_ticket__["a" /* CreateTicketPage */]);
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            _this.getTicket();
        });
    };
    TicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketPage');
    };
    TicketPage.prototype.onSegmentChange = function (segmentButton) {
        this.segment_active = segmentButton.value;
        console.log(this.segment_active);
        if (this.segment_active == 'first') {
            this.whichSegment = "first";
            console.log('first');
        }
        else {
            console.log('second');
            this.whichSegment = "second";
        }
    };
    TicketPage.prototype.status = function (status) {
        console.log(status);
        var alerts = this.alertCtrl.create({
            title: 'Status',
            message: status,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
    };
    TicketPage.prototype.toSecondSegment = function () {
        this.whichSegment = "second";
    };
    TicketPage.prototype.getTicket = function () {
        var _this = this;
        // this.loading.present()
        // if (this)
        var load = this.loadingCtrl.create({
            content: "Please wait...",
        });
        load.present();
        this.action = "get_ticket";
        this.data = this.http.get(this.baseURI + 'index.php/Cticket?action=' + this.action + '&param=' + this.searchTicket);
        this.data.subscribe(function (data) {
            //  console.log(data.data[0].msg_from)
            if (data.status == true) {
                _this.items = [];
                for (var i = 0; i < data.data.length; i++) {
                    _this.items.push({
                        ticketAssign: data.data[i].ticket_signTo,
                        ticketDesc: data.data[i].ticket_desc,
                        ticketNo: data.data[i].ticket_no,
                        uriImge: _this.baseURI + data.data[i].url_img + '.png',
                        createDate: data.data[i].CreateDate,
                        ticketSatatus: data.data[i].ticket_statusTrans
                    });
                }
                console.log(_this.items);
                load.dismiss();
                // this.loading.dismiss();
            }
            else if (data.status == false) {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Tidak Ada Data ..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                load.dismiss();
                // this.loading.dismiss()
                alerts.present();
            }
            else {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Gagal Load Data ..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                load.dismiss();
                // this.loading.dismiss()
                alerts.present();
            }
        }, function (error) {
            var alerts = _this.alertCtrl.create({
                title: 'Warning',
                message: 'Error Connection..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            load.dismiss();
            // this.loading.dismiss()
            alerts.present();
        });
    };
    TicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\ticket\ticket.html"*/'<ion-header>\n  <ion-navbar color="red">\n    <ion-title *ngIf="!isSearching">List Ticket</ion-title>\n    <ion-buttons *ngIf="!isSearching" end>\n      <button ion-button (tap)="openSearchBox($event)" icon-only padding-right>\n        <ion-icon md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end padding-right>\n      <button ion-button (tap)="openPopup($event)" icon-only>\n        <ion-icon name="md-funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div style="display:flex" *ngIf="isSearching">\n      <ion-icon tappable (tap)="closeSearchBox()" name="md-arrow-round-back" style=" color: #fff;font-size: 2em;align-self: center;padding-left: 10px;"></ion-icon>\n      <ion-input name="n" type="text" [(ngModel)]="searchTicket" (change)="goSearchTciket()" placeholder="Search Ticket" style="margin-left:10px"></ion-input>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let item of items">\n    <div style="display:flex;padding:10px;border-bottom: 1px solid #eee;">\n      <div style="flex:0.5">\n        <img [src]="item.uriImge" width="145px" height="100px" style="border-radius:4px" />\n      </div>\n      <div style="flex:1;margin-left:10px">\n        <div style="display:flex;flex-direction:column;">\n          <span style="flex:1;font-size:20px;margin-bottom:5px">{{item.ticketAssign}}</span>\n          <span style="flex:1;font-size:15px;color:#666;margin-bottom:2px">{{item.ticketDesc}}</span>\n          <span>#{{item.ticketNo}}</span>\n          <div style="display:flex;flex:1">\n            <span style="flex:2;font-size:12px;color: #DC4437">{{item.createDate}}</span>\n            <!-- <span style="flex:1">Finished</span> -->\n            <ion-badge *ngIf="item.ticketSatatus==\'0\'" item-end color="blueman">New Ticket</ion-badge>\n            <ion-badge *ngIf="item.ticketSatatus==\'1\'" item-end color="badge-yellow">On Progress</ion-badge>\n            <ion-badge *ngIf="item.ticketSatatus==\'2\'" item-end color="badge-green">Finished</ion-badge>\n            <ion-badge *ngIf="item.ticketSatatus==\'3\'" item-end color="badge-red">Pending</ion-badge>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n \n\n  <ion-fab right bottom>\n    <button ion-fab color="red" (tap)="toCreateTicket()">\n      <ion-icon name="md-create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<!-- <ion-header no-border>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n  <div padding style="display: flex;justify-content: center;">\n    <ion-segment [(ngModel)]="whichSegment" (ionChange)="onSegmentChange($event)">\n      <ion-segment-button value="first" style="color: black" icon-left>\n        List Ticket\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n      <ion-segment-button value="second" icon-left style="color:black">\n        Create Ticket\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header> -->\n\n<!-- <ion-content padding>\n  <div *ngIf="whichSegment===\'first\'">\n    <div id="list-container">\n      <div style="display:flex">\n        <span style="flex:2.8;font-size: 19px;font-weight: 500">IT Support</span><br>\n        <button ion-button color="secondary" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: #0ef50f;">Finished</button>\n      </div>\n      <span>Perbaikan Ruangan Server</span><br>\n      <span style="padding-top: 6px">Jum\'at, 17 Agustus 2018</span>\n    </div>\n    <div id="list-container">\n      <div style="display:flex">\n        <span style="flex:2.8;font-size: 19px;font-weight:500">Warehouse</span><br>\n        <button ion-button color="secondary" id="pending" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: #fe0000;">Pending</button>\n      </div>\n      <span>Penambahan Ruang Gedung</span><br>\n      <span>Selasa, 20 Agustus 2018</span>\n    </div>\n    <div id="list-container">\n      <div style="display:flex">\n        <span style="flex:2.8;font-size: 19px;font-weight: 500">GA</span><br>\n        <button ion-button color="secondary" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: yellow;">On\n          Progress\n        </button>\n      </div>\n      <span style="font-weight: 500">AC Tidak Dingin</span><br>\n      <span style="padding-top: 6px">Senin, 19 Agustus 2018</span>\n    </div>\n\n    <ion-fab right bottom>\n      <button ion-fab color="maroon" (tap)="toSecondSegment()"><ion-icon name="md-create"></ion-icon></button>\n    </ion-fab>\n  </div> -->\n\n<!-- secon pragment activ -->\n<!-- <div *ngIf="whichSegment===\'second\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <p>Take Picture</p>\n        </ion-col>\n        <ion-col col-7>\n          <button ion-button round small id="action">Action</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Take Barcode</p>\n        </ion-col>\n        <ion-col col-7>\n          <button ion-button round small id="action">Action</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Type Ticket</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text" placeholder=""></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Asign To</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Kode Asset</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Nama Asset</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Serial Number</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Tanggal Pembelian</p>\n        </ion-col>\n        <ion-col col-7> -->\n<!-- <ion-item> -->\n<!-- <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime> -->\n<!-- </ion-item> -->\n<!-- </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Area</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Gedung</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Lantai</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Deskripsi</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Info Lain</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-textarea type="text"></ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <span id="button-container">\n      <button ion-button class="btn-submit" (click)="status(\'Finish\')">Submit Ticket</button>\n    </span>\n  </div>\n</ion-content> -->'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\ticket\ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TicketPage);
    return TicketPage;
}());

//# sourceMappingURL=ticket.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResgisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__success_register_success_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ResgisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResgisterPage = /** @class */ (function () {
    function ResgisterPage(restProvider, alertCtrl, navCtrl, navParams) {
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResgisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResgisterPage');
    };
    ResgisterPage.prototype.toLoginPage = function () {
        this.restProvider.msg_error(this.email);
        // this.navCtrl.push(LoginPage)
    };
    ResgisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        // console.log(this.Nama)
        // const alerts = this.alertCtrl.create({
        //   title: 'Warning',
        //   message:'Input Username !',
        //   buttons:['OK'],
        //   enableBackdropDismiss:false
        // })
        // alerts.present();
    };
    ResgisterPage.prototype.register = function () {
        if (!this.nama || !this.perusahaan || !this.divisi || !this.email || !this.password) {
            var alerts = this.alertCtrl.create({
                title: 'Error',
                message: 'Input text kosong..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__success_register_success_register__["a" /* SuccessRegisterPage */]);
        }
    };
    ResgisterPage.prototype.toForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    ResgisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resgister',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\resgister\resgister.html"*/'<!--\n  Generated template for the ResgisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div id="image-container">\n    <img src="../../assets/imgs/ut-in-login.png" />\n  </div>\n\n  <div id="input-container">\n    <ion-input type="text" [(ngModel)]="nama" name="nama" placeholder="Nama" style="margin-bottom: 20px"></ion-input>\n    <ion-icon name="md-person"></ion-icon>\n  </div>\n\n  <div style="margin-top:-35px;padding-left: 15px;padding-right: 15px;">\n    <ion-input type="text" [(ngModel)]="perusahaan" name="perusahaan" placeholder="Perusahaan" style="margin-bottom: 20px"></ion-input>\n    <ion-icon class="icon-key" name="md-briefcase"></ion-icon>\n  </div>\n\n  <div style="margin-top:-35px;padding-left: 15px;padding-right: 15px;">\n    <ion-input type="text" [(ngModel)]="divisi" name="divisi" placeholder="Divisi" style="margin-bottom: 20px"></ion-input>\n    <ion-icon class="icon-key" name="md-card"></ion-icon>\n  </div>\n\n  <div style="margin-top:-35px;padding-left: 15px;padding-right: 15px;">\n    <ion-input type="text" [(ngModel)]="email" name="email" placeholder="Email" style="margin-bottom: 20px"></ion-input>\n    <ion-icon class="icon-key" name="md-mail"></ion-icon>\n  </div>\n\n  <div style="margin-top:-35px;padding-left: 15px;padding-right: 15px;">\n    <ion-input type="password" [(ngModel)]="password" name="password" placeholder="Password" style="margin-bottom: 20px"></ion-input>\n    <ion-icon class="icon-key" name="md-lock"></ion-icon>\n  </div>\n\n  <div id="button-container">\n    <button ion-button style="background-color:#FDD400" round (tap)="register()">REGISTRATION</button>\n  </div>\n\n  <div style="text-align:center;margin-top: 20px">\n    <span tappable (tap)="toLoginPage()">Have Account? Login Here</span><br>\n    <span tappable (tap)="toForgotPassword()">Forgot Password</span>\n  </div>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Nama</ion-label>\n      <ion-input type="text" [(ngModel)]="Nama" id="Nama" name="Nama"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Perusahaan</ion-label>\n      <ion-input type="text" [(ngModel)]="perusahaan" id="perusahaan" name="perusahaan"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Divisi</ion-label>\n      <ion-input type="text" [(ngModel)]="Divisi" id="Divisi" name="Divisi"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="Email" id="Email" name="Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button round style="min-width: 200px; padding: 10px 16px" (click)="Registrasi()">Registrasi</button>\n      <p tappable> Forgot Password ? </p>\n    </ion-item>\n    <ion-item text-center>\n      <p tappable (click)="login()"> have account? <b>Login Here</b> </p>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\resgister\resgister.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ResgisterPage);
    return ResgisterPage;
}());

//# sourceMappingURL=resgister.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SuccessRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuccessRegisterPage = /** @class */ (function () {
    function SuccessRegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuccessRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessRegisterPage');
    };
    SuccessRegisterPage.prototype.toLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SuccessRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success-register',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\success-register\success-register.html"*/'<!--\n  Generated template for the SuccessRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div id="image-container">\n    <img src="../../assets/imgs/ut-in-login.png" />\n  </div>\n\n  <div id="image-success-container">\n    <img src="../../assets/imgs/success.png" />\n  </div>\n\n  <h4 style="text-align:center">THANK\'S FOR YOUR REGISTRATION</h4>\n\n  <div id="button-container">\n    <button ion-button style="background-color:#FDD400" round (tap)="toLoginPage()">LOGIN</button>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\success-register\success-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SuccessRegisterPage);
    return SuccessRegisterPage;
}());

//# sourceMappingURL=success-register.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/approval-tiket/approval-tiket.module": [
		325,
		15
	],
	"../pages/cheklist/cheklist.module": [
		326,
		14
	],
	"../pages/create-message/create-message.module": [
		327,
		13
	],
	"../pages/create-ticket/create-ticket.module": [
		328,
		12
	],
	"../pages/forgot-password/forgot-password.module": [
		329,
		11
	],
	"../pages/jadwal-maintanance/jadwal-maintanance.module": [
		330,
		10
	],
	"../pages/login/login.module": [
		331,
		9
	],
	"../pages/menus/menus.module": [
		332,
		8
	],
	"../pages/message-detail/message-detail.module": [
		333,
		7
	],
	"../pages/popover/popover.module": [
		334,
		6
	],
	"../pages/profil/profil.module": [
		335,
		5
	],
	"../pages/resgister/resgister.module": [
		336,
		4
	],
	"../pages/success-register/success-register.module": [
		337,
		3
	],
	"../pages/success-reset/success-reset.module": [
		338,
		2
	],
	"../pages/ticket/ticket.module": [
		339,
		1
	],
	"../pages/usage-detail/usage-detail.module": [
		340,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usage_detail_usage_detail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticket_ticket__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ContactPage } from '../contact/contact';



// import { MenusPage } from '../menus/menus';

// import { ApprovalTiketPage } from '../approval-tiket/approval-tiket';
var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__usage_detail_usage_detail__["a" /* UsageDetailPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__ticket_ticket__["a" /* TicketPage */];
        // tab3Root = ApprovalTiketPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profil_profil__["a" /* ProfilPage */];
        this.username = navParams.data;
        console.log(navParams.data);
        // const modal = this.modalCtrl.create(MenusPage);
        // modal.present();
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Message" tabIcon="mail-open" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ticket" tabIcon="add" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Menu" tabIcon="menu" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profil" tabIcon="person" tabsHideOnSubPages="true"></ion-tab> -->\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tracking" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ticket" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Message" tabIcon="mail-open"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profil" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_native_status_bar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_message_create_message__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_detail_message_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = /** @class */ (function () {
    // public loading = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   // duration :1000
    // });
    function AboutPage(loadingCtrl, http, restProvider, navCtrl, statusBar, modalCtrl, popoverCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.isCreateMessage = false;
        this.isSearching = false;
        this.isPage = "AboutPage";
        this.DataParam = {};
        this.whichSegment = "first";
        this.baseURI = this.restProvider.baseURI;
        this.closeSearchBox();
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        this.getMessage();
    };
    AboutPage.prototype.onSegmentChange = function (segmentButton) {
        this.segment_active = segmentButton.value;
        console.log(this.segment_active);
        if (this.segment_active == 'first') {
            this.whichSegment = "first";
            this.isCreateMessage = false;
            console.log('first');
        }
        else {
            console.log('second');
            this.whichSegment = "second";
            this.isCreateMessage = true;
        }
    };
    AboutPage.prototype.openSearchBox = function (event) {
        this.isSearching = true;
    };
    AboutPage.prototype.closeSearchBox = function () {
        this.isSearching = false;
        // this.searchMsg = 'undefined';
        this.searchMsg = '';
        this.getMessage();
    };
    AboutPage.prototype.goSearchMsg = function () {
        this.getMessage();
    };
    AboutPage.prototype.onCancel = function (e) {
        console.log('cancel');
        this.isSearching = false;
    };
    AboutPage.prototype.onInput = function (e) {
        console.log(e);
    };
    AboutPage.prototype.openPopup = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */]);
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
    };
    AboutPage.prototype.toCreateMessage = function () {
        var _this = this;
        // this.navCtrl.push(CreateMessagePage);
        this.searchMsg = '';
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__create_message_create_message__["a" /* CreateMessagePage */], { data: null }, { enableBackdropDismiss: true, cssClass: 'select-modal' });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.getMessage();
        });
    };
    AboutPage.prototype.toMessageDetail = function (event, item) {
        // console.log(item)
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__message_detail_message_detail__["a" /* MessageDetailPage */], { data: item }, { enableBackdropDismiss: true, cssClass: 'select-modal' });
        modal.present();
    };
    AboutPage.prototype.send = function (status) {
        console.log(status);
        var alerts = this.alertCtrl.create({
            title: 'Status',
            message: status,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
    };
    AboutPage.prototype.toSecondSegment = function () {
        this.whichSegment = "second";
    };
    AboutPage.prototype.getMessage = function () {
        var _this = this;
        // this.loading.present()
        // if (this)
        var load = this.loadingCtrl.create({
            content: "Please wait...",
        });
        load.present();
        this.action = "get_message";
        this.data = this.http.get(this.baseURI + 'index.php/Cmessage?action=' + this.action + '&param=' + this.searchMsg);
        this.data.subscribe(function (data) {
            //  console.log(data.data[0].msg_from)
            if (data.status == true) {
                _this.items = [];
                for (var i = 0; i < data.data.length; i++) {
                    _this.items.push({
                        from: data.data[i].msg_from,
                        sendTo: data.data[i].msg_to,
                        subject: data.data[i].msg_subject,
                        content: data.data[i].msg_content,
                        createDate: data.data[i].CreateDate
                    });
                }
                load.dismiss();
                // this.loading.dismiss();
            }
            else if (data.status == false) {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Tidak Ada Data ..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                load.dismiss();
                // this.loading.dismiss()
                alerts.present();
            }
            else {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Gagal Load Data ..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                load.dismiss();
                // this.loading.dismiss()
                alerts.present();
            }
        }, function (error) {
            var alerts = _this.alertCtrl.create({
                title: 'Warning',
                message: 'Error Connection..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            load.dismiss();
            // this.loading.dismiss()
            alerts.present();
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="red">\n    <ion-title *ngIf="!isSearching">Message</ion-title>\n    <ion-buttons *ngIf="!isSearching" end>\n      <button ion-button (tap)="openSearchBox($event)" icon-only padding-right>\n        <ion-icon md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end padding-right>\n      <button ion-button (tap)="openPopup($event)" icon-only>\n        <ion-icon name="md-funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div style="display:flex" *ngIf="isSearching">\n      <ion-icon tappable (tap)="closeSearchBox()" name="md-arrow-round-back" style=" color: #fff;font-size: 2em;align-self: center;padding-left: 10px;"></ion-icon>\n      <ion-input name="n" type="text" [(ngModel)]="searchMsg" (change)="goSearchMsg()" placeholder="Search Message" style="margin-left:10px"></ion-input>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor="let item of items">\n    <div  tappable (tap)="toMessageDetail($event,item)" style="display:flex;padding-left: 15px;padding-right: 15px;padding-top:15px; padding-bottom: 10px;border-bottom: 1px solid #eee">\n      <div style="flex: 1.5;display: flex;flex-direction: column">\n        <div style="display:flex;flex:1;margin-bottom: 5px;">\n          <span style="flex: 2;font-size:18px">{{item.from}}</span>\n          <span style="flex: 1;align-self:flex-end;font-size:12px;text-align:right">{{item.createDate}}</span>\n        </div>\n        <div style="flex:1;margin-bottom: 3px">\n          <span style="color: #333">{{item.subject}}</span>\n        </div>\n        <div style="display:flex;flex:1">\n          <span style="flex: 2;color:#333">{{item.content}}</span>\n          <ion-icon name="ios-star-outline"></ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>  \n\n  <ion-fab right bottom>\n    <button ion-fab color="red" (tap)="toCreateMessage()">\n      <ion-icon name="md-create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n<!-- <ion-header no-border>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n  <div padding style="display: flex;justify-content: center;">\n    <ion-segment [(ngModel)]="whichSegment" (ionChange)="onSegmentChange($event)">\n      <ion-segment-button value="first" style="color: black" icon-left>\n        List Message\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n      <ion-segment-button value="second" icon-left style="color:black">\n        Create\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="!isCreateMessage" id="input-container">\n    <ion-input type="text" placeholder="Search Message"></ion-input>\n    <ion-icon name="search"></ion-icon>\n  </div>\n\n  <div *ngIf="whichSegment===\'first\'">\n    <div id="list-container">\n      <span style="font-size: 19px">Supervisor Maintanace</span><br>\n      <span>Perbaikan Ruangan Server</span><br>\n      <div style="display:flex">\n        <span style="flex:2.8;padding-top: 6px">Jum\'at, 17 Agustus 2018</span>\n        <button ion-button color="secondary" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: #0ef50f;">Read</button>\n      </div>\n    </div>\n    <div id="list-container">\n      <span style="font-size: 19px;font-weight:500">Helena</span><br>\n      <span style="font-weight:500">Perbaikan Ruang Gedung</span><br>\n      <div style="display:flex">\n        <span style="font-weight:bold;flex:2.8;padding-top: 6px">Selasa, 20 Agustus 2018</span>\n        <button ion-button color="secondary" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: #fe0000;">Unread</button>\n      </div>\n    </div>\n    <div id="list-container">\n      <span style="font-size: 19px;font-weight: 500">Didik Maintanace</span><br>\n      <span style="font-weight: 500">AC Tidak Dingin</span><br>\n      <div style="display:flex">\n        <span style="flex:2.8;padding-top: 6px;font-weight: 500">Senin, 19 Agustus 2018</span>\n        <button ion-button color="secondary" small round style="flex:1;height: 1.5em;text-transform:unset;background-color: #fe0000;">Unread</button>\n      </div>\n    </div>\n\n    <ion-fab right bottom>\n      <button ion-fab color="maroon" (tap)="toSecondSegment()"><ion-icon name="md-create"></ion-icon></button> -->\n<!-- </ion-fab> -->\n<!-- <ion-item>\n      <ion-card color="blueman">\n        <ion-card-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>Supervisior Maintenance</ion-col>\n              <ion-col col-4 style="padding-left: 40px">\n                <button class="btn-read" ion-button round style="min-width: 100px; height: 20px ;" color="blues" (click)="status(\'Finish\')">Read</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>Perbaikan Ruang Server</ion-row>\n            <ion-row> Selasa , 20 Agustus 2018</ion-row>\n          </ion-grid>\n        </ion-card-header>\n      </ion-card>\n    </ion-item>\n    <ion-item>\n      <ion-card color="blueman">\n        <ion-card-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>Warehouse</ion-col>\n              <ion-col col-4 style="padding-left: 40px">\n                <button ion-button round style="min-width: 100px;height: 20px ;  " (click)="status(\'Pending\')" color="danger">Pending</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>Penambahan Ruang gudang</ion-row>\n            <ion-row> Selasa , 20 Agustus 2018</ion-row>\n          </ion-grid>\n        </ion-card-header>\n      </ion-card>\n    </ion-item>\n    <ion-item>\n      <ion-card color="blueman">\n        <ion-card-header>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>GA</ion-col>\n              <ion-col col-4 style="padding-left: 40px">\n                <button ion-button round style="min-width: 100px;height: 20px ;" color="secondary" (click)="status(\'On Progress\')">On\n                  Progress\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>AC Tidak Dingin</ion-row>\n            <ion-row> Selasa , 20 Agustus 2018</ion-row>\n          </ion-grid>\n        </ion-card-header>\n      </ion-card>\n    </ion-item> -->\n<!-- </div> -->\n\n<!-- secon pragment activ -->\n<!-- <div *ngIf="whichSegment===\'second\'">\n    <ion-grid id="create">\n      <ion-row>\n        <ion-col col-5>\n          <p>To</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text" placeholder=""></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Subject</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Descriptions</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-textarea placeholder="Enter a description" rows="9"></ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <span id="button-container">\n      <button class="btn-mssg" ion-button (click)="send(\'Send\')">Send Message</button>\n    </span>\n  </div>\n</ion-content> -->'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usage_detail_usage_detail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menus_menus__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MyApp } from './app.component';
var HomePage = /** @class */ (function () {
    function HomePage(element, modalCtrl, alertCtrl, navParams, appCtrl, viewCtrl, navCtrl) {
        this.element = element;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.username = window.localStorage.getItem('username');
        // this.username = navParams.data
        this.whichSegment = "first";
        console.log(this.username);
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
    HomePage.prototype.onSegmentChange = function (segmentButton) {
        this.segment_active = segmentButton.value;
        console.log(this.segment_active);
        if (this.segment_active == 'first') {
            this.whichSegment = "first";
            console.log('first');
        }
        else {
            console.log('second');
            this.whichSegment = "second";
        }
    };
    HomePage.prototype.status = function (status) {
        console.log(status);
        var alerts = this.alertCtrl.create({
            title: 'Status',
            message: status,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
    };
    HomePage.prototype.send = function () {
        var alerts = this.alertCtrl.create({
            title: 'Information',
            message: 'Successfull ..!',
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
        this.isi = "";
    };
    HomePage.prototype.logout = function () {
        // this.menuController.close()
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.toUsageDetail = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__usage_detail_usage_detail__["a" /* UsageDetailPage */]);
        modal.present();
    };
    HomePage.prototype.toMenu = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menus_menus__["a" /* MenusPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar color="red">\n    <ion-title>Dasboard Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n\n  <span id="image-slide">\n    <img src="../../assets/imgs/4.jpg" alt="image">\n  </span>\n\n  <!-- <div id="eui-container">\n    <div class="eui-text" style="padding-top:10px">\n      <span>Energy Usage Intensity</span><br>\n      <span>(EUI)</span>\n    </div>\n    <div class="eui-text">\n      <span style="position: relative;top: 10px;">Energy Consumptions</span>\n    </div>\n    <div class="eui-text eui-text2">\n      <span>Water</span>\n      <span>Consumption</span>\n    </div>\n  </div> -->\n\n  <div id="chart-container">\n    <div class="chart-item" style="justify-content: flex-start;padding-left: 10px;">\n      <div class="color">\n        <div class="inner-container">\n          <div id="inner-9" style="display:flex;flex-direction: column">\n            <p style="position:relative;left:113%;padding-left:10px;margin-top:0">Boros</p>\n            <p style="position:relative;left:120%">Agak Boros</p>\n            <p style="position:relative;left:120%">Cukup Efisien</p>\n            <p style="position:relative;left:113%;padding-left:6px">Efisien</p>\n            <p style="position:relative;left:115%;padding-left:5px">Sangat Efesien</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="chart-item">\n      <div class="color">\n        <div class="inner-container">\n          <div id="inner-1">\n            <p style="font-size: 11.5px;">10%</p>\n          </div>\n          <div id="inner-2">\n            <p style="font-size: 11.5px;">30%</p>\n          </div>\n          <div id="inner-3">\n            <p style="font-size: 11.5px;">60%</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="label-color1" style="margin-left:13px">\n        <div style="display:flex;height: 10%">\n          <!-- <div style="height: 10px;width: 10px;background-color: green; "></div> -->\n          <span style="font-size: 11.5px;align-self: center">Solar</span>\n        </div>\n        <div style="display:flex;height:30%">\n          <!-- <div style="height: 10px;width: 10px;background-color: yellow; "></div> -->\n          <span style="font-size: 11.5px;align-self: center">&nbsp;Fuel</span>\n        </div>\n        <div style="display:flex;height:60%">\n          <!-- <div style="height: 10px;width: 10px;background-color: orangered; "></div> -->\n          <span style="font-size: 11.5px;align-self: center">&nbsp;PLN</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="chart-item">\n      <div class="color">\n        <div class="inner-container">\n          <div id="inner-4">\n            <p style="font-size: 11.5px;">10%</p>\n          </div>\n          <div id="inner-5">\n            <p style="font-size: 11.5px;">15%</p>\n          </div>\n          <div id="inner-6">\n            <p style="font-size: 11.5px;">10%</p>\n          </div>\n          <div id="inner-7">\n            <p style="font-size: 11.5px;">25%</p>\n          </div>\n          <div id="inner-8">\n            <p style="font-size: 11.5px;">50%</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="label-color2" style="margin-left: 4px;">\n        <div style="display:flex;height: 10%">\n          <span style="font-size: 11.5px;margin-left: 10px;align-self: center">Sungai</span>\n        </div>\n        <div style="display:flex;height:15%">\n          <span style="font-size: 11.5px;margin-left: 10px;align-self: center">Recycle</span>\n        </div>\n        <div style="display:flex;height:10%">\n          <span style="font-size: 11.5px;margin-left: 10px;align-self: center">Sumur</span>\n        </div>\n        <div style="display:flex;height: 25%;">\n          <span style="font-size: 11.5px;margin-left: 10px;align-self: center">Air Hujan</span>\n        </div>\n        <div style="display:flex;height: 50%;">\n          <span style="font-size: 11.5px;margin-left: 10px;align-self: center">PDAM</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div style="display:flex">\n    <div style="flex:1;text-align: center;font-size: 12px;display:flex;flex-direction: column">\n      <span>Energy Usage</span>\n      <span>Intensity (EUI)</span>\n    </div>\n    <div style="flex:1;text-align: center;font-size: 12px;display:flex;flex-direction: column">\n      <span>Energy</span>\n      <span>Consumptions</span>\n    </div>\n    <div style="flex:1;text-align: center;font-size: 12px;display:flex;flex-direction: column">\n      <span>Water</span>\n      <span>Consumptions</span>\n    </div>\n    <div style="flex:0.3"></div>\n  </div>\n\n  <div style="display:flex;margin-top:10px">\n    <div style="flex:1;text-align: center;font-size: 14px;display:flex;flex-direction: column">\n      <span>80 EUI</span>\n    </div>\n    <div style="flex:1;text-align: center;font-size: 14px;display:flex;flex-direction: column">\n      <span>80 KWh</span>\n    </div>\n    <div style="flex:1;text-align: center;font-size: 14px;display:flex;flex-direction: column">\n      <span>110 M3</span>\n    </div>\n    <div style="flex:0.3"></div>\n  </div>\n\n  <!-- <div style="display:flex;margin-left: 15px;margin-right: 15px;margin-top:20px;height:11%">\n    <div style="flex:1;font-size:12px;text-align:center;border:0.5px solid #000;padding: 5px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;">\n      <span style="color:#444">Energy</span>\n      <span style="color:#444">Saving</span>\n      <span style="font-size:15px;position: relative;bottom: -13%">23 %</span>\n    </div>\n    <div style="flex:1.5;font-size:11.5px;text-align:center;border:0.5px solid #000;padding: 5px">\n      <span style="color:#444">Energy Used</span>\n      <span style="color:#444">Intensity (EUI)</span><br>\n      <span style="font-size:15px;position: relative;bottom: -13%">80 EUI</span>\n    </div>\n    <div style="flex:1;font-size:12px;text-align:center;border:0.5px solid #000;padding: 5px">\n      <span style="color:#444">Energy</span>\n      <span style="color:#444">Consumptions</span>\n      <span style="font-size:15px;position: relative;bottom: -13%">80 KWH</span>\n    </div>\n    <div style="flex:1;font-size:12px;text-align:center;border:0.5px solid #000;padding: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;">\n      <span style="color:#444">Water</span>\n      <span style="color:#444">Consumptions</span>\n      <span style="font-size:15px;position: relative;bottom: -13%">110 M3</span>\n    </div>\n  </div> -->\n\n\n  <div id="box-below-chart">\n    <div tappable (tap)="toUsageDetail()" style="display:flex;flex:1;flex-direction:column;align-items: center">\n      <img src="../../assets/imgs/circle.png" style="max-width:55%;margin-bottom: 10px" />\n      <!-- <span>23%</span> -->\n      <span>Energy</span>\n      <span>Saving</span>\n    </div>\n    <div tappable (tap)="toUsageDetail()" style="display:flex;flex:1;flex-direction:column;align-items: center">\n      <img src="../../assets/imgs/energy icon.png" style="max-width:55%;margin-bottom: 10px" />\n      <span>Energy</span>\n    </div>\n    <div tappable (tap)="toUsageDetail()" style="display:flex;flex:1;flex-direction:column;align-items: center">\n      <img src="../../assets/imgs/water icon.png" style="max-width:55%;margin-bottom: 10px" />\n      <span>Water</span>\n    </div>\n    <div tappable (tap)="toMenu()" style="display:flex;flex:1;flex-direction:column;align-items: center">\n      <img src="../../assets/imgs/all menu.png" style="    max-width: 41%;margin-bottom: 19%;margin-top: 7%;" />\n      <span>Menu</span>\n    </div>\n  </div>\n\n  <div style="position: absolute;bottom: -4.3%;left: 10.5%;font-size: 16px;color: #6caf45;">\n    <span>23%</span>\n  </div>\n\n  <!-- <div style="display:flex;justify-content: center;margin-top:10px">\n    <img src="../../assets//imgs/energy-saving.jpg" style="height:90px" />\n  </div> -->\n\n  <!-- <div style="display:flex">\n    <img src="../../assets/imgs/leaf.png" style="flex:0;height:50px" />\n    <div style="flex:0;display: flex;flex-direction: column;font-size: 12px">\n      <span>Energy</span>\n      <span>Saving</span>\n    </div>\n    <div style="flex:0;display:flex">\n      <span>23</span>\n      <span>%</span>\n    </div>\n  </div> -->\n\n  <!-- <div id="energy-saving-container"> -->\n  <!-- <img src="../../assets/imgs/energy_saving.jpg " id="energy-saving" /> -->\n  <!-- <span id="persen-energy-saving">23%</span> -->\n  <!-- </div> -->\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\home\home.html"*/
        })
        // @Directive({
        //   selector: 'ion-textarea[autosize]'
        // })
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalTiketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApprovalTiketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovalTiketPage = /** @class */ (function () {
    function ApprovalTiketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.whichSegment = 'first';
    }
    ApprovalTiketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApprovalTiketPage');
    };
    ApprovalTiketPage.prototype.onSegmentChange = function (segmentButton) {
        this.segment_active = segmentButton.value;
        this.whichSegment = this.segment_active == 'first' ? 'first' : 'second';
    };
    ApprovalTiketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-approval-tiket',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\approval-tiket\approval-tiket.html"*/'<!--\n  Generated template for the ApprovalTiketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n  <div padding style="display: flex;justify-content: center;">\n    <ion-segment [(ngModel)]="whichSegment" (ionChange)="onSegmentChange($event)">\n      <ion-segment-button value="first" style="color: black" icon-left>\n        Approval Ticket\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n      <ion-segment-button value="second" icon-left style="color:black">\n        Assign Ticket\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!isCreateMessage" id="input-container">\n    <ion-input type="text" placeholder="Search Message"></ion-input>\n    <ion-icon name="search"></ion-icon>\n  </div>\n\n  <div *ngIf="whichSegment==\'first\'">\n    <p>Ko</p>\n  </div>\n  <div *ngIf="whichSegment==\'second\'">\n    <p>hai</p>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\approval-tiket\approval-tiket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ApprovalTiketPage);
    return ApprovalTiketPage;
}());

//# sourceMappingURL=approval-tiket.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheklistPage = /** @class */ (function () {
    function CheklistPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.whichSegment = "first";
    }
    CheklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheklistPage');
    };
    CheklistPage.prototype.onSegmentChange = function (segmentButton) {
        this.segment_active = segmentButton.value;
        console.log(this.segment_active);
        if (this.segment_active == 'first') {
            this.whichSegment = "first";
            console.log('first');
        }
        else {
            console.log('second');
            this.whichSegment = "second";
        }
    };
    CheklistPage.prototype.status = function (status) {
        console.log(status);
        var alerts = this.alertCtrl.create({
            title: 'Status',
            message: status,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alerts.present();
    };
    CheklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cheklist',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\cheklist\cheklist.html"*/'<ion-header no-border>\n  <div>\n    <img src="../../assets/imgs/ut.png" id="utfams-image" />\n    <img src="../../assets/imgs/ut2.png" id="ut-logo" />\n  </div>\n  <div padding style="display: flex;justify-content: center;">\n    <ion-segment [(ngModel)]="whichSegment" (ionChange)="onSegmentChange($event)">\n      <ion-segment-button value="first" style="color: black" icon-left>\n        Data\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n      <ion-segment-button value="second" icon-left style="color:black">\n        Checklist Asset\n        <div style="margin-top: -20px !important; "></div>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="whichSegment===\'second\'">\n    <ion-grid id="checklist-segment">\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Panel Kontrol</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small (click)="status(\'Finish\')">Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Indikator-Indikato</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Body Genset</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Panel Operasi</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Instalasi Kabel</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Grounding</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Tuas Breaker</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Emergency Stop</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Pelindung Kipas</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Silincer</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Peredam Getaran</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">Circuit Breaker</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <p class="label-checklist">AVR</p>\n        </ion-col>\n        <ion-col col-5>\n          <ion-item>\n            <ion-label>Good</ion-label>\n            <ion-select [(ngModel)]="gender" interface="popover">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button round small>Detail</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <span id="button-container">\n      <button ion-button (click)="status(\'Finish\')">Selesai</button>\n    </span>\n  </div>\n\n  <!-- secon pragment activ -->\n  <div *ngIf="whichSegment===\'first\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <p>Take Picture</p>\n        </ion-col>\n        <ion-col col-7>\n          <button ion-button round small id="action">Action</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Take Barcode</p>\n        </ion-col>\n        <ion-col col-7>\n          <button ion-button round small id="action">Action</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Kode Asset</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Serial Number</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Nama Asset</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Tanggal Pembelian</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Area</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Gedung</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <p>Lantai</p>\n        </ion-col>\n        <ion-col col-7>\n          <ion-input type="text"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <span id="button-container">\n      <button ion-button (click)="status(\'Finish\')">Halaman Berikut</button>\n    </span>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\cheklist\cheklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CheklistPage);
    return CheklistPage;
}());

//# sourceMappingURL=cheklist.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resgister_resgister__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cheklist_cheklist__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menus_menus__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_approval_tiket_approval_tiket__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jadwal_maintanance_jadwal_maintanance__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_success_register_success_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_success_reset_success_reset__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_popover_popover__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_create_message_create_message__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_create_ticket_create_ticket__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_message_detail_message_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_qrcode2__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_usage_detail_usage_detail__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import { HttpClientModule } from '@angular/common/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resgister_resgister__["a" /* ResgisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cheklist_cheklist__["a" /* CheklistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__["a" /* TicketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_approval_tiket_approval_tiket__["a" /* ApprovalTiketPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jadwal_maintanance_jadwal_maintanance__["a" /* JadwalMaintanancePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_success_register_success_register__["a" /* SuccessRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_reset_success_reset__["a" /* SuccessResetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_create_message_create_message__["a" /* CreateMessagePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_create_ticket_create_ticket__["a" /* CreateTicketPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_message_detail_message_detail__["a" /* MessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_usage_detail_usage_detail__["a" /* UsageDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/approval-tiket/approval-tiket.module#ApprovalTiketPageModule', name: 'ApprovalTiketPage', segment: 'approval-tiket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cheklist/cheklist.module#CheklistPageModule', name: 'CheklistPage', segment: 'cheklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-message/create-message.module#CreateMessagePageModule', name: 'CreateMessagePage', segment: 'create-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-ticket/create-ticket.module#CreateTicketPageModule', name: 'CreateTicketPage', segment: 'create-ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jadwal-maintanance/jadwal-maintanance.module#JadwalMaintanancePageModule', name: 'JadwalMaintanancePage', segment: 'jadwal-maintanance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menus/menus.module#MenusPageModule', name: 'MenusPage', segment: 'menus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'MessageDetailPage', segment: 'message-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resgister/resgister.module#ResgisterPageModule', name: 'ResgisterPage', segment: 'resgister', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success-register/success-register.module#SuccessRegisterPageModule', name: 'SuccessRegisterPage', segment: 'success-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success-reset/success-reset.module#SuccessResetPageModule', name: 'SuccessResetPage', segment: 'success-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usage-detail/usage-detail.module#UsageDetailPageModule', name: 'UsageDetailPage', segment: 'usage-detail', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resgister_resgister__["a" /* ResgisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cheklist_cheklist__["a" /* CheklistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__["a" /* TicketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_approval_tiket_approval_tiket__["a" /* ApprovalTiketPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jadwal_maintanance_jadwal_maintanance__["a" /* JadwalMaintanancePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_success_register_success_register__["a" /* SuccessRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_reset_success_reset__["a" /* SuccessResetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_create_message_create_message__["a" /* CreateMessagePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_create_ticket_create_ticket__["a" /* CreateTicketPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_message_detail_message_detail__["a" /* MessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_usage_detail_usage_detail__["a" /* UsageDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    // baseURI   : string = 'http://fams.sinarabipraya.com/';
    function RestProvider(http) {
        this.http = http;
        this.baseURI = 'http://192.168.43.230/UT_Api/';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.msg_error = function (msg) {
        console.log(msg);
        return msg;
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

// import { ResgisterPage } from '../pages/resgister/resgister';
// import { SuccessRegisterPage } from '../pages/success-register/success-register';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { SuccessResetPage } from '../pages/success-reset/success-reset';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="blues">\n    <ion-title>\n      Contact\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button menuClose color="danger" icon-end (click)="logout()" >\n            LOG OUT\n            <ion-icon name="exit"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Mobile Apps Hybrid </ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionic3 @angular5 \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resgister_resgister__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, http, restProvider, alertCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DataParam = {};
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.baseURI = this.restProvider.baseURI;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // loading(){
    //   const loader = this.loadingCtrl.create({
    //     content: "Please wait...",
    //     // duration: 1000
    //   });
    //   loader.present();
    // }
    LoginPage.prototype.login = function () {
        this.loading.present();
        // this.loading
        if (!this.email) {
            var alerts = this.alertCtrl.create({
                title: 'Warning',
                message: 'Lengkapi Email ..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            this.loading.dismiss();
            alerts.present();
            this.email = "";
        }
        else if (!this.password) {
            var alerts = this.alertCtrl.create({
                title: 'Warning',
                message: 'Lengkapi Password..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            this.loading.dismiss();
            alerts.present();
            this.password = "";
        }
        else {
            this.loading.dismiss();
            // this.goLogin(this.email,this.password)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.goLogin = function (email, password) {
        //====================== VIA STRINGFY  ============================//
        // this.DataParam['email']         = this.email;
        // let dataSend = new FormData();
        // dataSend.append('data',JSON.stringify(this.DataParam));
        //====================== END STRINGFY ============================//
        var _this = this;
        //====================== VIA VARIABLE ===========================//
        var dataSend = new FormData();
        dataSend.append('username', email);
        dataSend.append('password', password);
        dataSend.append('action', 'proses_login');
        //====================== END STRINGFY ============================//
        this.data = this.http.post(this.baseURI + 'index.php/Clogin', dataSend);
        this.data.subscribe(function (data) {
            console.log(data);
            _this.loading.dismiss();
            if (data.status == true) {
                // window.localStorage.setItem('storageUserLogin', data.user_name);
                // window.localStorage.setItem('storageNikLogin', data.nik);
                // window.localStorage.setItem('storageApplicantIDLogin', data.applicant_id);
                // window.localStorage.setItem('storageUserIdLogin', data.user_id);
                _this.email = "";
                _this.password = "";
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'User or Password Salah ..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                alerts.present();
            }
        }, function (error) {
            _this.loading.dismiss();
            var alerts = _this.alertCtrl.create({
                title: 'Warning',
                message: 'Error Connection..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resgister_resgister__["a" /* ResgisterPage */]);
    };
    LoginPage.prototype.toForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
        console.log('hai');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <div id="image-container">\n    <img src="../../assets/imgs/ut-in-login.png" />\n  </div>\n  <h2 style="text-align:center">Welcome</h2>\n\n  <div id="input-container">\n    <ion-input type="text" [(ngModel)]="email" name="email" placeholder="Email" style="margin-bottom: 20px"></ion-input>\n    <ion-icon name="ios-mail-outline"></ion-icon>\n  </div>\n\n  <div style="margin-top:-30px;padding-left: 15px;padding-right: 15px;">\n    <ion-input type="password" [(ngModel)]="password" name="password" placeholder="Password"></ion-input>\n    <ion-icon name="md-key" id="icon-key"></ion-icon>\n  </div>\n\n  <div id="button-container">\n    <button ion-button style="background-color:#FDD400" round (tap)="login()">LOGIN</button>\n    <!-- <button ion-button style="background-color:#F44336" round (tap)="login()">LOGIN</button> -->\n  </div>\n\n  <div style="text-align:center;margin-top: 20px">\n    <span tappable (tap)="register()">Not a Member? Register Here</span><br>\n    <span>or</span><br>\n    <span tappable (tap)="toForgotPassword()">Forgot Password</span>\n  </div>\n\n  <!-- <ion-input type="text" placeholder="Email" style="margin-bottom:20px;"></ion-input>\n  <ion-input type="password" placeholder="Password"></ion-input> -->\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username" id="username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" id="password" name="password"></ion-input>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button round style="min-width: 200px; padding: 10px 16px" (click)="login()">Login</button>\n      <p tappable style="margin-top:10px"> Forgot Password</p>\n      <p tappable style="margin-top:10px" (click)="register()">Have\'n account? Create Account</p>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n<!-- <ion-content >\n  </ion-content> -->'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_reset_success_reset__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(loadingCtrl, http, restProvider, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.DataParam = {};
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.baseUri = this.restProvider.baseURI;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.toResetSuccess = function () {
        var _this = this;
        if (!this.email) {
            var alerts = this.alertCtrl.create({
                title: 'Warning',
                message: 'Lengkapi Email  ..!',
                buttons: ['OK'],
                enableBackdropDismiss: false
            });
            alerts.present();
            this.email = "";
        }
        else {
            //====================== VIA STRINGFY  ============================//
            this.loading.present();
            this.DataParam['email'] = this.email;
            var dataSend = new FormData();
            dataSend.append('data', JSON.stringify(this.DataParam));
            //====================== END STRINGFY ============================//
            //===================== VIA PER VARIABLE =========================//
            // let dataSend = new FormData();
            // dataSend.append('username',this.email);
            // dataSend.append('password',password);
            //===================== END PER VARIABLE =========================//
            this.data = this.http.post(this.baseUri + 'index.php/Cforgotpass', dataSend);
            this.data.subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__success_reset_success_reset__["a" /* SuccessResetPage */]);
                    var alerts = _this.alertCtrl.create({
                        title: 'Information',
                        message: 'Cek Your Email ..!',
                        buttons: ['OK'],
                        enableBackdropDismiss: false
                    });
                    _this.loading.dismiss();
                    alerts.present();
                }
                else {
                    var alerts = _this.alertCtrl.create({
                        title: 'Warning',
                        message: 'ERROR | Not Send Password ..!',
                        buttons: ['OK'],
                        enableBackdropDismiss: false
                    });
                    _this.loading.dismiss();
                    alerts.present();
                }
            }, function (error) {
                var alerts = _this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Error Connection..!',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                _this.loading.dismiss();
                alerts.present();
            });
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <div id="image-container">\n    <img src="../../assets/imgs/ut-in-login.png" />\n  </div>\n\n  <div style="margin-top:40px;">\n    <div style="display:flex;justify-content:center">\n      <ion-icon name="md-lock" style="font-size:7.2em;margin-bottom: 10px"></ion-icon>\n    </div>\n    <div style="padding: 0 15px">\n      <ion-input type="email" [(ngModel)]="email" name="email" required placeholder="Enter Your Email" style="margin-bottom: 20px"></ion-input>\n      <ion-icon class="icon-key" name="md-mail"></ion-icon>\n    </div>\n  </div>\n\n  <div id="button-container">\n    <button ion-button style="background-color:#FDD400" round (tap)="toResetSuccess()">RESET</button>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\popover\popover.html"*/'<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-list style="margin-bottom: 0">\n  <ion-item tappable>\n    Pesan Terbaru\n  </ion-item>\n  <ion-item tappable>\n    Belum dibaca\n  </ion-item>\n  <ion-item tappable>\n    Pesan terbaru\n  </ion-item>\n  <ion-item tappable>\n    Belum dibaca\n  </ion-item>\n</ion-list>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsageDetailPage = /** @class */ (function () {
    function UsageDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsageDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsageDetailPage');
    };
    UsageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usage-detail',template:/*ion-inline-start:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\usage-detail\usage-detail.html"*/'<!--\n  Generated template for the UsageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="red">\n    <ion-title>Usage Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"G:\PROJECT\ANDROID\UNITED TRACTOR\UT\UT\src\pages\usage-detail\usage-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UsageDetailPage);
    return UsageDetailPage;
}());

//# sourceMappingURL=usage-detail.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map