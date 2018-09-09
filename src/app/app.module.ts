import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ResgisterPage } from '../pages/resgister/resgister';
import { ProfilPage } from '../pages/profil/profil';
import { CheklistPage } from '../pages/cheklist/cheklist';
import { MenusPage } from '../pages/menus/menus';
import { TicketPage } from '../pages/ticket/ticket';
import { ApprovalTiketPage } from '../pages/approval-tiket/approval-tiket';
import { JadwalMaintanancePage } from '../pages/jadwal-maintanance/jadwal-maintanance';
import { SuccessRegisterPage } from '../pages/success-register/success-register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SuccessResetPage } from '../pages/success-reset/success-reset';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { PopoverPage } from '../pages/popover/popover';
import { CreateMessagePage } from '../pages/create-message/create-message';
import { CreateTicketPage } from '../pages/create-ticket/create-ticket';
import { MessageDetailPage } from '../pages/message-detail/message-detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { UsageDetailPage } from '../pages/usage-detail/usage-detail';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResgisterPage,
    ProfilPage,
    CheklistPage,
    MenusPage,
    TicketPage,
    ApprovalTiketPage,
    JadwalMaintanancePage,
    SuccessRegisterPage,
    ForgotPasswordPage,
    SuccessResetPage,
    PopoverPage,
    CreateMessagePage,
    CreateTicketPage,
    MessageDetailPage,
    UsageDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResgisterPage,
    ProfilPage,
    CheklistPage,
    MenusPage,
    TicketPage,
    ApprovalTiketPage,
    JadwalMaintanancePage,
    SuccessRegisterPage,
    ForgotPasswordPage,
    SuccessResetPage,
    PopoverPage,
    CreateMessagePage,
    CreateTicketPage,
    MessageDetailPage,
    UsageDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
